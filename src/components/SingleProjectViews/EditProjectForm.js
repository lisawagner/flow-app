import { useState, useEffect } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

// styles
import styles from './EditProjectForm.module.css'

const EditProjectForm = ({ project, onClose }) => {
  const [name, setName] = useState(project.name)
  const [details, setDetails] = useState(project.details)
  const { editDocument, response } = useFirestore('projects')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = {
      name,
      details,
    }
    editDocument(project.id, newData)
  }

  console.log("Project to Edit: ", project);

  // Reset
  useEffect(() => {
    if (response.success) {
      setName('')
      setDetails('')
      onClose()
    }
  }, [response.success, onClose])

  return (
    <>
      <div className={styles.editProjectContent}>
        <h2  className={styles.formTitle}>Edit Project</h2>
        
        <form onSubmit={handleSubmit} >
          <label htmlFor="name" className={styles.formLabel}>
            <span>Change Name</span>
            <input 
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)} 
              value={name} 
            />
          </label>
          <label htmlFor="details" className={styles.formLabel}>
            <span>Change Details</span>
            <textarea 
              type="text"
              name="details"
              onChange={(e) => setDetails(e.target.value)} 
              value={details} 
            />
          </label>
          <div className={styles.newBtnsWrap}>
            <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
            <button className={styles.editBtn}>Update</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default EditProjectForm