import { useEffect, useState, useReducer } from "react"
// firebase
import { db } from '../firebase/config'
import { onSnapshot, doc, getDoc  } from 'firebase/firestore'


export const useDocument = (collection, id) => {
  // const [response, dispatch] = useReducer(budgetReducer, initialState)
  const [userDoc, setUserDoc] = useState(null)
  const [error, setError] = useState(null)

  // realtime document data
  useEffect(() => {
    // const docRef = db.collection(collection).doc(id)
    const docRef = doc(db, collection, id)
    // const snapshot = getDoc(docRef)

    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      // need to make sure the doc exists & has data
      if(snapshot.exists) {
        setUserDoc({...snapshot.data(), id: snapshot.id})
        setError(null)
      }
      else {
        setError('No such document exists')
      }
    }, err => {
      console.log(err.message)
      setError('failed to get document')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection, id])

  return { userDoc, error }
}