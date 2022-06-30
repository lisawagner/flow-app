import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ActionsBtn.module.css'
// icons
import {
  RiUserLine,
  RiLogoutBoxLine
} from "react-icons/ri";

const ActionsBtn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const actionsBtnRef = useRef()

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

      <button
        type="button"
        className={styles.actionsBtn}
        onClick={handleToggle}
      >
        LW
      </button>
      {isOpen && (
        // TODO: Extract to separate component
        <div className={styles.dropDownContainer}>
          <div className={styles.dropDownWrap}>
            <div className={styles.actionsDropdown}>

              <NavLink to="/profile" >
                <button className={styles.actionsItemBtn} onClick={handleToggle}>
                  <RiUserLine className={styles.actionsIcon}/>
                  <span>My Profile</span>
                </button>
              </NavLink>

              <span className={styles.actionSpacer}></span>

              <NavLink to="/login">
                <button className={styles.actionsItemBtn}>
                  <RiLogoutBoxLine className={styles.actionsIcon}/>
                  <span>Log Out</span> 
                </button>
              </NavLink>

            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default ActionsBtn