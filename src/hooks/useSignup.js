import { useState } from 'react'
import { auth, storage, db } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile, getAuth, sendEmailVerification } from 'firebase/auth'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const newAuth = getAuth()

  const signup = async ( email, password, displayName, avatar) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      
      console.log("User Created");
      // we now have a uid

      if (!res) {
        throw new Error('Could not complete signup. Please check your credentials and try again')
      }

      // add user avatar folder to storage with uid key and filename
      const uploadRef = ref(storage, `avatars/${res.user.uid}/${avatar.name}`)

      // upload the image
      const uploadImg = await uploadBytes(uploadRef, avatar)
      const imgURL = await getDownloadURL(uploadRef, uploadImg)

      // add displayName and avatar to user after successful registration
      await updateProfile(res.user, {
        displayName,
        // photoURL: avatarURL
        photoURL: imgURL
      })
      console.log('User profile updated for: ' + displayName);

      // create firestore users collection if it doesn't already exist
      // add user document to users collection
      await setDoc(doc(db, "users", res.user.uid), {
        online: true,
        displayName,
        // photoURL: avatarURL
        photoURL: imgURL
      })
      console.log('User document added to users collection');

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      // send verification email
      sendEmailVerification(newAuth.currentUser)
        .then(() => {
          console.log('Email verification sent!');
          // need site on live server to finish set up for email verification
        })

      setIsPending(false)
      setError(null)
    } 
    catch(err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { signup, error, isPending }
}