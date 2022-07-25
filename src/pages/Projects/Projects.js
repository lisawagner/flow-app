import { useCollection } from '../../hooks/useCollection'
// components
import ProjectActions from '../../components/Projects/ProjectActions'
import ProjectPage from '../../components/Projects/ProjectPage'
// styles
import styles from './Projects.module.css'

const Projects = ({ title }) => {
  const { documents, error } = useCollection('projects')

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