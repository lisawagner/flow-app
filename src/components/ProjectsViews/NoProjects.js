import { Link } from 'react-router-dom'
// styles
import styles from './NoProjects.module.css'
// icons
import { RiDraftLine } from "react-icons/ri";

const NoProjects = () => {
  return (
    <div className={styles.noProjectWrap}>
      <RiDraftLine className={styles.noProjectIcon}/>
      <h1>Ready to create your first project?</h1>
      <p className={styles.hideOnSmall}>You do not have any active projects right now.</p>
      <p className={styles.hideOnSmall}>Go ahead, create your first project.</p>
      <Link to='/create'>
        <button type="button" tabIndex="0" className={styles.noProjectBtn}>
          <span>Create Project</span>
        </button>
      </Link>
      
    </div>
  )
}

export default NoProjects