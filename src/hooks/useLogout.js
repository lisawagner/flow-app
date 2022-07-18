import { useEffect, useState } from 'react'
import { db, auth } from '../firebase/config'
import { doc, setDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  
  const logout = async () => {
    setError(null)
    setIsPending(true)

    try {
      // update online status before logging out
      const { uid } = auth.currentUser

      const docRef = doc(db, "users", uid)
      await setDoc(docRef, { online: false }, { merge: true })
      console.log('User status updated');

      // sign the user out
      await signOut(auth)

      
      // dispatch logout action
      dispatch({ type: 'LOGOUT' })

      // update state
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      } 
    } 
    catch(err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    // clean up function
    return () => setIsCancelled(true)
  }, [])

  return { logout, error, isPending }
}