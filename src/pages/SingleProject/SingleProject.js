import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
// import { useTitle } from '../../context/TitleContext'

// components
import ProjectHeader from '../../components/SingleProjectViews/ProjectHeader'
import TabNavBar from '../../components/TabNavBar/TabNavBar'

// styles
import styles from './SingleProject.module.css'

const SingleProject = () => {
  const { id } = useParams()
  const { error, userDoc } = useDocument('projects', id)
  // const { setTitle } = useTitle()

  // useEffect(() => {
    
  //   setTitle(projectTitle)
  // }, [setTitle, projectTitle])

  // Time for React-Helmet

  
  if (error) {
    return <div className="error">{error}</div>
  }
  if (!userDoc) {
    return <div className="loading">Loading...</div>
  }

  return (
    <>
      <ProjectHeader title={userDoc.name} />
      <div className={styles.spWrap}>
        <TabNavBar />
        <h1>{userDoc.name}</h1>
      </div>
    </>
  )
}

export default SingleProject