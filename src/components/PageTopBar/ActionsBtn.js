import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import styles from './ActionsBtn.module.css'

// icons
import {
  RiUserLine,
  RiLogoutBoxLine
} from "react-icons/ri";
import Avatar from '../Avatar/Avatar';


const ActionsBtn = () => {
  const { logout } = useLogout()
  const [isOpen, setIsOpen] = useState(false)
  const actionsBtnRef = useRef()
  const { user } = useAuthContext()
  
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (e) => {
    if (actionsBtnRef.current && !actionsBtnRef.current.contains(e.target)) {
      setIsOpen(false)
    }
    };

  // attach eventListener to listen when componentDidMount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // returning a func in useEffect runs like componentWillUnmount for cleanup
    return () => document.removeEventListener("mousedown",  handleClickOutside);
  }, []);

  return (
    <div className={styles.actionsBtnContainer} ref={actionsBtnRef}>
      <div className={styles.actionBtnWrap}>
      <button
        type="button"
        className={styles.actionsBtn}
        onClick={handleToggle}
      >
        <Avatar src={user.photoURL}/>
      </button>
      </div>

      {isOpen && (
        // TODO: Extract to separate component
        <div className={styles.dropDownContainer}>
          <div className={styles.dropDownWrap}>
            <div className={styles.actionsDropdown}>

              <Link to="/profile" >
                <button
                  className={styles.actionsItemBtn}
                  onClick={handleToggle}
                >
                  <RiUserLine className={styles.actionsIcon}/>
                  <span>My Profile</span>
                </button>
              </Link>

              <span className={styles.actionSpacer}></span>

              <Link to="/flow">
                <button className={styles.actionsItemBtn} onClick={logout}>
                  <RiLogoutBoxLine className={styles.actionsIcon}/>
                  <span>Log Out</span> 
                </button>
              </Link>

            </div>
          </div>
        </div>
      )}


    </div>
  )
}

export default ActionsBtn