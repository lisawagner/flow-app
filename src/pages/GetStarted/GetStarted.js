import React from 'react'
import styles from './GetStarted.module.css'
import Register from '../../components/Register/Register'
import Login from '../../components/Login/Login'
import { ReactComponent as FlowLogo } from '../../images/original-logo3.svg'
// icons
import {
  RiHomeLine,
  RiCheckboxCircleLine,
  RiGroupLine,
  RiWindyLine,
  RiNotification4Line
} from "react-icons/ri";

const GetStarted = () => {
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
      
      <div className={styles.authWrap}>
        <Register />
        {/* <Login /> */}
      </div>

    </div>
    </div>
  )
}

export default GetStarted

// <div className={styles.logo}>logo</div>