import { NavLink } from 'react-router-dom'

// styles
import styles from './Navbar.module.css'
import { RiHomeLine, RiCheckboxCircleLine, RiGroupLine, RiDropLine, RiWindyLine, RiNotification4Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className={styles.flowNavBar}>
      {/* <div className="branded">Flow</div> */}
      <nav className={styles.flowNav}>
        {/* <div className={styles.navlinks}> */}
          <div className={styles.branded}>Flow</div>
          <NavLink to="/" className={styles.navSelector}>
            <RiHomeLine className={styles.navIcon}/>
            <span>Home</span> 
          </NavLink>
          <NavLink to="/tasks" className={styles.navSelector}>
            <RiCheckboxCircleLine className={styles.navIcon}/>
            <span>Tasks</span>
          </NavLink>
          <NavLink to="/teams" className={styles.navSelector}>
            <RiGroupLine className={styles.navIcon}/>
            <span>Teams</span> 
          </NavLink>
          <NavLink to="/streams" className={styles.navSelector}>
            <RiWindyLine className={styles.navIcon}/>
            <span>Streams</span>
          </NavLink>
          <NavLink to="/inbox" className={styles.navSelector}>
            <RiNotification4Line className={styles.navIcon}/>
            <span>Inbox</span>
          </NavLink>
        {/* </div> */}
      </nav>
    </div>
  )
}

export default Navbar