import { useState } from 'react';
import Select from 'react-select'
import { useFirestore } from '../../hooks/useFirestore';
import { useOutletContext } from 'react-router-dom';
import { nanoid } from 'nanoid';

// styles
import styles from './AddTaskForm.module.css'

// TODO: Move const to data file
const priorities = [
  { value: 'high', label: 'High'},
  { value: 'medium', label: 'Medium'},
  { value: 'low', label: 'Low'},
]

const AddTaskForm = ({ onClose }) => {
  const { userDoc } = useOutletContext()
  const [taskName, setTaskName] = useState('')
  const [priority, setPriority] = useState([])
  // const [assignedColumn, setAssignedColumn] = useState('')
  const { editDocument, response } = useFirestore('projects')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newTaskToAdd = {
      taskId: nanoid(6),
      taskName,
      priority: priority.value,
      assignedColumn: "W3PsY0",
    }
    console.log('Task: ', newTaskToAdd);
    // editDocument(project.id, newTaskToAdd)
    
    await editDocument(userDoc.id, {
      tasks: [...userDoc.tasks, newTaskToAdd],
    })
    if (!response.error) {
      setTaskName('')
      setPriority('')
    }
  }

  // console.log("Project to Edit: ", userDoc);

  return (
    <>
    <div className={styles.editProjectContent}>
      <h2  className={styles.formTitle}>Add Task</h2>
      
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
          <button className={styles.editBtn}>Add</button>
        </div>

      </form>
    </div>
  </>
  )
}

export default AddTaskForm