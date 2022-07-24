import { useState, useEffect } from 'react'
import { useCollection } from '../../hooks/useCollection'
import Select from 'react-select'
// styles
import styles from './NewProject.module.css'

// TODO:  Consider coding a text editor for summary section
//        or use a plugin
// TODO:  Consider making this a modal window instead

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
]

const NewProject = () => {
  const { documents } = useCollection('users')
  const [users, setUsers] = useState([])

  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)

  // create user values for react-select
  useEffect(() => {
    if(documents) {
      setUsers(documents.map(user => {
        return { value: {...user, id: user.id}, label: user.displayName }
      }))
    }
  }, [documents])
  // console.log(users)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    if (!category) {
      setFormError('* Please select a category *')
      return
    }
    if (assignedUsers.length < 1) {
      setFormError('* Set at least 1 user to project *')
      return
    }

    console.log(name, details, dueDate, category.value, assignedUsers)
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
            <Select
              onChange={(option) => setCategory(option)}
              options={categories}
            />
          </label>

          <label htmlFor="assign members" className={styles.formLabel}>
            <span>Assign Members</span>
            <Select
              onChange={(option) => setAssignedUsers(option)}
              options={users}
              isMulti
            />
          </label>

          <div className={styles.newBtnsWrap}>
            <div>
              <button className={styles.cancelBtn}>Cancel</button> 
            </div>
            <div>
              <button className={styles.createBtn}>Create Project</button>
            </div>
          </div>
          {formError && <p className={styles.error}>{formError}</p>}
        </form>
      </div>
    </div>
    </div>
  )
}

export default NewProject