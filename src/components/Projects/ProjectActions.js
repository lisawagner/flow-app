import { Link } from 'react-router-dom'
import styles from './ProjectActions.module.css'

const ProjectActions = ({ title }) => {
  return (
    <div className={styles.pActionsContainer}>
      <div className={styles.pActionsTitleBar}>
        <h1 className={styles.pActionsTitle}>All {title}</h1>
      </div>
      <div className={styles.pActions}>
        <div>
          <Link to='/create'>
            <button type="button" tabindex="0" className={styles.pActionsBtn}>
              <span>New Project</span>
            </button>
          </Link>
        </div>
        
      </div>
      
    </div>
  )
}

export default ProjectActions