import { useCollection } from '../../hooks/useCollection'
// components
import ProjectActions from '../../components/Projects/ProjectActions'
import ProjectPage from '../../components/Projects/ProjectPage'
// styles
import styles from './Streams.module.css'

const Streams = ({ title }) => {
  const { documents, error } = useCollection('projects')

  return (
    <div className={styles.streamsContainer}>
      <ProjectActions title={title} />
      {error && <p className="error">{error}</p>}
      {/* {documents && documents.map(doc => (
        <p key={doc.id}>{doc.name}</p>
      ))} */}
      {documents && <ProjectPage projects={documents} />}
    </div>
  )
}

export default Streams