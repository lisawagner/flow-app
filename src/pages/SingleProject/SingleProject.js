import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
import { useTitle } from '../../context/TitleContext'

// styles
import styles from './SingleProject.module.css'

const SingleProject = () => {
  const { id } = useParams()
  const { error, userDoc } = useDocument('projects', id)
  const [projectTitle, setProjectTitle] = useState('')
  const { setTitle } = useTitle()

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
    <div>
      <h1>{userDoc.name}</h1>

    </div>
  )
}

export default SingleProject