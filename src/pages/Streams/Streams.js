import React from 'react'
import ProjectActions from '../../components/Projects/ProjectActions'
import ProjectPage from '../../components/Projects/ProjectPage'
// styles
import styles from './Streams.module.css'

const Streams = ({ title }) => {
  return (
    <div className={styles.streamsContainer}>
      <ProjectActions title={title} />
      <ProjectPage />
    </div>
  )
}

export default Streams