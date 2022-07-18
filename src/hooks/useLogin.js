import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

// firebase
import { db, auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
  
    try {
      // login
      const res = await signInWithEmailAndPassword(auth, email, password)

      // set online status
      const docRef = doc(db, "users", res.user.uid)
      await setDoc(docRef, { online: true }, { merge: true })
      console.log('User status updated');

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

    } 
    catch(err) {
      setError(err.message)
    }
  }

  return { login, error }
}
