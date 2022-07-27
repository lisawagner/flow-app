import ProjectActions from './ProjectActions'
import { useAuthContext } from '../../hooks/useAuthContext'
// styles
import styles from './ProjectHeader.module.css'

const ProjectHeader = ({ project}) => {

  const { user } = useAuthContext()
  
  return (
    <div className={styles.pHeaderWrap}>
      <div className={styles.pHeaderContainer}>
        <h1>{project.name}</h1>
        {/* only display the project actions to project creator */}
        {user.uid === project.createdBy.id && (
          <ProjectActions project={project}/> 
        )}
      </div>
    </div>
  )
}

export default ProjectHeader