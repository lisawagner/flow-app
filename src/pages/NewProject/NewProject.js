import { useState } from 'react'
// styles
import styles from './NewProject.module.css'

// TODO:  Consider coding a text editor for summary section
//        or use a plugin
// TODO:  Consider making this a modal window instead

const NewProject = () => {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(name, details, dueDate)
  }

  return (
    <div className={styles.newProjectWrap}>
    <div className={styles.createWrap}>
      
      <div className={styles.createContent}>
        <h2 className={styles.formTitle}>Project Details</h2>

        <form onSubmit={handleSubmit}>

          <label htmlFor="name" className={styles.formLabel}>
            <span>Name</span>
            <input
                required 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
          </label>

          <label htmlFor="summary" className={styles.formLabel}>
            <span>Summary</span>
            <textarea 
              required
              onChange={(e) => setDetails(e.target.value)}
              value={details} 
            ></textarea>
          </label>

          <label htmlFor="dueDate" className={styles.formLabel}>
            <span>Due Date</span>
            <input
              required 
              type="date" 
              onChange={(e) => setDueDate(e.target.value)} 
              value={dueDate}
            />
          </label>

          <label htmlFor="category" className={styles.formLabel}>
            <span>Category</span>
            {/* select here later */}
          </label>

          <label htmlFor="assignedTo" className={styles.formLabel}>
            <span>Assign To</span>
            {/* select here later */}
          </label>

          <div className={styles.newBtnsWrap}>
            <div>
              <button className={styles.cancelBtn}>Cancel</button> 
            </div>
            <div>
              <button className={styles.createBtn}>Create Project</button>
            </div>
          </div>

        </form>
      </div>
    </div>
    </div>
  )
}

export default NewProject