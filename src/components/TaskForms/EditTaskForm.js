import { useState, useEffect } from 'react';
import Select from 'react-select'
import { useOutletContext } from 'react-router-dom';
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext';

// firebase
import { db } from '../../firebase/config';
import { useFirestore } from '../../hooks/useFirestore';
import { updateDoc, doc, getDoc, query, where, getDocs } from 'firebase/firestore';

// styles
import styles from './EditTaskForm.module.css'


// TODO: Move const to data file
const priorities = [
  { value: 'high', label: 'High'},
  { value: 'medium', label: 'Medium'},
  { value: 'low', label: 'Low'},
]

// this is not working.

const EditTaskForm = ({ onClose, id, name, taskPriority, lane }) => {
  const { userDoc } = useOutletContext()
  const { user } = useAuthContext()
  const [taskName, setTaskName] = useState(name)
  const [priority, setPriority] = useState([])
  // const [assignedColumn, setAssignedColumn] = useState('')
  const { editDocument, response } = useFirestore('projects')


  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('Editing');
    // const updatedTask = {
    //   taskName,
    //   priority: priority.value,
    //   assignedColumn: lane,
    //   taskId: id,
    // }
    
    // editDocument(userDoc.id, {
    //   tasks: [...userDoc.tasks, updatedTask],
    // })

    // await updateDoc(taskRef, {
    //   taskName,
    //   priority: priority.value,
    // })
  }

  // Reset
  // useEffect(() => {
  //   if (response.success) {
  //     setTaskName('')
  //     setPriority([])
  //     onClose()
  //   }
  // }, [response.success, onClose])

  return (
    <>
    <div className={styles.editProjectContent}>
      <h2  className={styles.formTitle}>Edit Task</h2>
      
      <form onSubmit={handleSubmit} >
        <label htmlFor="name" className={styles.formLabel}>
          <span>Task Name</span>
          <input 
            type="text"
            name="taskName"
            onChange={(e) => setTaskName(e.target.value)} 
            value={taskName} 
          />
        </label>
        <label htmlFor="priority" className={styles.formLabel}>
            <span>Priority</span>
            <Select
              className={styles.addTaskSelect}
              onChange={(option) => setPriority(option)}
              options={priorities}
            />
          </label>

        <div className={styles.newBtnsWrap}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.editBtn}>Edit</button>
        </div>

      </form>
    </div>
  </>
  )
}

export default EditTaskForm