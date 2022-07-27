import { Link } from 'react-router-dom'
import NoProjects from './NoProjects';
import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import styles from './ProjectPage.module.css'

// icons
import { RiFolder3Fill, RiLock2Line } from "react-icons/ri";

// TODO:  Refactor code into re-usable components
//        'ButtonView' and 'ListView' for projects, plus NoProjectsView
// TODO:  Add a 'key' to the single project page so that user can select
//        their default view. Ie. key='overview', key='listview', key='boardview'

const ProjectPage = ({ projects }) => {
  const { user } = useAuthContext()

  const allProjects = projects

  const assignedProjects = projects ? projects.filter(project => {
    let assignedToMe = false
    project.assignedUsersList.forEach(u => {
      if(u.id === user.uid) {
        assignedToMe = true
      }
    })
    return assignedToMe
  }) : null


  // user.uid === project.createdBy.id
  const myProjects = projects ? projects.filter(project => {
    let madeByMe = false
    if(user.uid === project.createdBy.id) {
        madeByMe = true
    }
    return madeByMe
  }) : null

  if (allProjects.length === 0) {
    return <NoProjects />
  } else {
    return (
      
      <div>
        <div className={styles.pPageWrap}>
          <div className={styles.pPageContainer}>
  
            {allProjects.map(project => (
            <div key={project.id} className={styles.pTileWrap}>
              <div className={styles.pTileCardWrap}>
                <div className={styles.pTileCardContainer}>
                  <Link to={`/projects/${project.id}/overview`}  className={styles.pCardLinkWrap}>
                    
                    <div className={styles.pCardLinkContainer}>
                      <div className={styles.pCardLinkWrap}>
                        <div className={styles.pCardIconWrap}>
                          <RiFolder3Fill className={styles.pIcon} />
                        </div>
                      </div>
                      <div className={styles.pTileCardName}>{project.name}</div>
                      <div className={styles.pCardSubTitle}>
                        {/* <RiLock2Line /> */}
                      </div>
                    </div>
  
                  </Link>
                </div>
              </div>
            </div>
            ))}
  
          </div>
        </div>
      </div>
    )
  }

}

export default ProjectPage