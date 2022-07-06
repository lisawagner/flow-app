import { useState } from 'react'
import styles from './GetStarted.module.css'
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';

// icons
import {
  RiCheckboxCircleLine,
  RiGroupLine,
  RiWindyLine
} from "react-icons/ri";

const GetStarted = () => {
  const [isUser, setIsUser] = useState(true)

  return (
    <div className={styles.getStartedContainer}>
    <div className={styles.getStartedWrap}>
      <div className={styles.detailsWrap}>

        <div className={styles.startTitle}>Flow helps you</div>
        <ul>
          <li className={styles.startListItem}>
            <RiCheckboxCircleLine className={styles.nMenuIcon}/>
            <span>Prioritize Tasks</span>
          </li>
          <li className={styles.startListItem}>
            <RiWindyLine className={styles.nMenuIcon}/>
            <span>Review Your Progress</span>
          </li>
          <li className={styles.startListItem}>
            <RiGroupLine className={styles.nMenuIcon}/>
            <span>Connect + Collaborate</span> 
          </li>
        </ul>

      </div>
      
      <div className={styles.gatewayWrap}>
        <div className={styles.gatewayHeader}>
          <h1 className={styles.gatewayTitle}>&#123;Flow&#125;</h1>
        </div>
        
        {isUser
          ? <Login isUser={isUser} setIsUser={setIsUser}/>
          : <Register isUser={isUser} setIsUser={setIsUser}/>
        }
      </div>

    </div>
    </div>
  )
}

export default GetStarted

// <div className={styles.logo}>logo</div>