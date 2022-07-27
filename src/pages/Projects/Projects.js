import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
// components
import ProjectActions from '../../components/ProjectsViews/ProjectActions'
import ProjectPage from '../../components/ProjectsViews/ProjectPage'
// styles
import styles from './Projects.module.css'

const Projects = ({ title }) => {
  const { documents, error } = useCollection('projects')
  const { user } = useAuthContext()

  return (
    <div className={styles.projectsContainer}>
      <ProjectActions title={title} />
      {error && <p className="error">{error}</p>}
      {/* {documents && documents.map(doc => (
        <p key={doc.id}>{doc.name}</p>
      ))} */}
      {documents && <ProjectPage projects={documents} />}
    </div>
  )
}

export default Projects