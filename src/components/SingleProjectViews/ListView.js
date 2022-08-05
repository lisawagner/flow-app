import { useEffect, useState} from 'react'
import { useOutletContext } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
// firebase
import { db } from '../../firebase/config'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';

// not working
const ListView = () => {
  const { userDoc } = useOutletContext()
  console.log("OutletContext: ", userDoc);
  const { user } = useAuthContext()
  const [tasks, setTasks] = useState([])

  console.log(user);

  useEffect(() => {
    const collectionRef = collection(db, "tasks");
    const q = query(collectionRef, orderBy("name", "desc"));

    // unsubscribe from this socket whenever the component unmounts
    const unsub = onSnapshot(q, (snapshot) =>
    setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, []);
  

  return (
    <>
    <div>ListView</div>
    <p>some data</p>
    <div>
      {tasks.map((task) => (
        <div key={Math.random()}>{task.name}</div>
      ))}
    </div>

    </>
  )
}

export default ListView