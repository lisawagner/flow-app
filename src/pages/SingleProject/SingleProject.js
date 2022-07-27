import { Outlet, useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'

// components
import ProjectHeader from '../../components/SingleProjectViews/ProjectHeader'
import TabNavBar from '../../components/TabNavBar/TabNavBar'

// styles
import styles from './SingleProject.module.css'

const SingleProject = () => {
  const { id } = useParams()
  const { error, userDoc } = useDocument('projects', id)
  
  if (error) {
    return <div className="error">{error}</div>
  }
  if (!userDoc) {
    return <div className="loading">Loading...</div>
  }

  return (
    <>
      {/* <ProjectHeader title={userDoc.name} /> */}
      <ProjectHeader project={ userDoc } />
      <div className={styles.spWrap}>
        <TabNavBar />
        <Outlet context={{ userDoc }} />
      </div>
    </>
  )
}

export default SingleProject