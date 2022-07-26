// styles
import styles from './ProjectHeader.module.css'

const ProjectHeader = ({ title }) => {
  return (
    <div className={styles.pHeaderWrap}>
      <div className={styles.pHeaderContainer}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default ProjectHeader