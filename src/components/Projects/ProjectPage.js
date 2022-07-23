import styles from './ProjectPage.module.css'

const ProjectPage = () => {
  return (
    <div>
      <div>Project Cards/Tiles</div>
      <div className={styles.pPageWrap}>
        <div className={styles.pPageContainer}>
          <div className={styles.pTileWrap}>
            <div className={styles.pTileCard}>
              <div className={styles.pTileCardIcon}>
                iconImage
              </div>
              <div className={styles.pTileCardName}>Project Name</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage