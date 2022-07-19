import { Link } from 'react-router-dom'
//  styles
import styles from './NotFound.module.css'
// assets
import catImg from '../../assets/images/cat.jpg'

const NotFound = () => {
  return (
    <div className={styles.container}>

      <div className={styles.image}>
        <img src={catImg} alt="cat sitting on laptop keyboard, looking guilty" />
      </div>
      <div className={styles.details}>
      <div className={styles.brandBlob}>&#123;Flow&#125;</div>
        <h1>W O O P S I E !</h1>
        <span>Something went wrong.</span>
        <span>William the cat may have been involved.</span>
        {/* <p>Redirect authorized users back to dashboard, send unauth users to login/getstarted</p> */}
        <Link to="/flow"><button>Go Back</button></Link>
        
      </div>
      </div>

  )
}

export default NotFound