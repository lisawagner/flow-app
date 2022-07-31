import { Link } from "react-router-dom"
import styles from './FlowLanding.module.css'
// icons
import {
  RiCheckboxCircleLine,
  RiGroupLine,
  RiWindyLine
} from "react-icons/ri";

const FlowLanding = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingWrap}>

        <div className={styles.messageWrap}>
          <h1 className={styles.brandTitle}>&#123;Flow&#125;</h1>
          <h2 className={styles.subTitle}>Life-changing</h2>
          
            <Link to="/flow">
              <button>
                <span>Get Started</span>
              </button>
            </Link>
          
        </div>

        <div className={styles.detailsWrap}>
          <h2 className={styles.sectionTitle}>Organize Your Success</h2>
          <i>"Do one thing everyday, towards your goals"</i>
          <p>With FLOW, you have a system that helps you move through adversity, towards success.</p>
        </div>

        <div className={styles.featuresWrap}>
          <h2 className={styles.sectionTitle}>FEATURES</h2>
          <div className={styles.featuresItems}>
            <div className={styles.feature}>
              <RiCheckboxCircleLine className={styles.featureIcon}/>
              <h2>Organize</h2>
              <p>Create Kanban boards with Drag and Drop convenience. Prioritize tasks easily.</p>
            </div>
            <div className={styles.feature}>
              <RiGroupLine className={styles.featureIcon}/>
              <h2>Connect</h2>
              <p>Collaborate on projects. Message team members.</p>
            </div>
            <div className={styles.feature}>
              <RiWindyLine className={styles.featureIcon}/>
              <h2>View</h2>
              <p>Review your projects and create new projects.</p>
            </div>
          </div>
        </div>
        <div className={styles.detailsWrap}>
          <h2 className={styles.sectionTitle}>A Foundation Framework</h2>
          <i>"Just showing up is half the battle."</i>
          {/* <p>By taking even the smallest step daily, whether that be sending an email, or reviewing one if your goals, you will continually move forward.</p> */}
          
          <p>Your success is a series of small steps. FLOW is the framework that helps you focus and stay on track.</p>
          {/* <p>FLOW helps you navigate the sea of adversity.</p> */}
        </div>
        <div className={styles.footerWrap}></div>
      </div>
    </div>
  )
}

export default FlowLanding