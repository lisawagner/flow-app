import { Link } from 'react-router-dom'
import NoProjects from './NoProjects';

// styles
import styles from './ProjectPage.module.css'

// icons
import { RiFolder3Fill, RiLock2Line } from "react-icons/ri";

// TODO:  Refactor code into re-usable components
//        'ButtonView' and 'ListView' for projects, plus NoProjectsView

const ProjectPage = ({ projects }) => {
  const allProjects = projects

  if (projects.length === 0) {
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
                  <Link to={`/streams/${project.id}`}  className={styles.pCardLinkWrap}>
                    
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