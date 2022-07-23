import styles from './ProjectPage.module.css'
import { Link } from 'react-router-dom'

// icons
import { RiFolder3Fill, RiLock2Line } from "react-icons/ri";

// TODO: Extract tiles into their own component

const ProjectPage = () => {
  return (
    <div>
      <div className={styles.pPageWrap}>
        <div className={styles.pPageContainer}>

          <div className={styles.pTileWrap}>
            <div className={styles.pTileCardWrap}>
              <div className={styles.pTileCardContainer}>
                <Link to='/home' className={styles.pCardLinkWrap}>
                  
                  <div className={styles.pCardLinkContainer}>
                    <div className={styles.pCardLinkWrap}>
                      <div className={styles.pCardIconWrap}>
                        <RiFolder3Fill className={styles.pIcon} />
                      </div>
                    </div>
                    <div className={styles.pTileCardName}>Project Name</div>
                    <div className={styles.pCardSubTitle}>
                      <RiLock2Line />
                    </div>
                  </div>

                </Link>
              </div>
            </div>
          </div>

          <div className={styles.pTileWrap}>
            <div className={styles.pTileCardWrap}>
              <div className={styles.pTileCardContainer}>
                <Link to='/home' className={styles.pCardLinkWrap}>
                  <div className={styles.pCardLinkContainer}>
                    <div className={styles.pCardLinkWrap}>
                      <div className={styles.pCardIconWrap}>
                        <RiFolder3Fill className={styles.pIcon} />
                      </div>
                    </div>
                    <div className={styles.pTileCardName}>Project Name</div>
                    <div className={styles.pCardSubTitle}></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.pTileWrap}>
            <div className={styles.pTileCardWrap}>
              <div className={styles.pTileCardContainer}>
                <Link to='/home' className={styles.pCardLinkWrap}>
                  <div className={styles.pCardLinkContainer}>
                    <div className={styles.pCardLinkWrap}>
                      <div className={styles.pCardIconWrap}>
                        <RiFolder3Fill className={styles.pIcon} />
                      </div>
                    </div>
                    <div className={styles.pTileCardName}>Project Name</div>
                    <div className={styles.pCardSubTitle}></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.pTileWrap}>
            <div className={styles.pTileCardWrap}>
              <div className={styles.pTileCardContainer}>
                <Link to='/home' className={styles.pCardLinkWrap}>
                  <div className={styles.pCardLinkContainer}>
                    <div className={styles.pCardLinkWrap}>
                      <div className={styles.pCardIconWrap}>
                        <RiFolder3Fill className={styles.pIcon} />
                      </div>
                    </div>
                    <div className={styles.pTileCardName}>Project Name</div>
                    <div className={styles.pCardSubTitle}></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.pTileWrap}>
            <div className={styles.pTileCardWrap}>
              <div className={styles.pTileCardContainer}>
                <Link to='/home' className={styles.pCardLinkWrap}>
                  <div className={styles.pCardLinkContainer}>
                    <div className={styles.pCardLinkWrap}>
                      <div className={styles.pCardIconWrap}>
                        <RiFolder3Fill className={styles.pIcon} />
                      </div>
                    </div>
                    <div className={styles.pTileCardName}>Project Name</div>
                    <div className={styles.pCardSubTitle}>
                      <RiLock2Line />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectPage