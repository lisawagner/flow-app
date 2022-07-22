import { NavLink } from 'react-router-dom'
// styles
import styles from './NavbarMenu.module.css'
// icons
import {
  RiHomeLine,
  RiCheckboxCircleLine,
  RiGroupLine,
  RiWindyLine,
  RiNotification4Line
} from "react-icons/ri";

const NavbarMenu = () => {
  return (
    <div className={styles.nMenuWrap}>
      <nav className={styles.nMenu}>

        <NavLink to="/home" className={styles.nMenuSelector}>
          <RiHomeLine className={styles.nMenuIcon}/>
          <span>Home</span> 
        </NavLink>

        <NavLink to="/tasks" className={styles.nMenuSelector}>
          <RiCheckboxCircleLine className={styles.nMenuIcon}/>
          <span>Tasks</span>
        </NavLink>

        <NavLink to="/streams" className={styles.nMenuSelector}>
          <RiWindyLine className={styles.nMenuIcon}/>
          <span>Projects</span>
        </NavLink>

        <NavLink to="/teams" className={styles.nMenuSelector}>
          <RiGroupLine className={styles.nMenuIcon}/>
          <span>Teams</span> 
        </NavLink>
        
        <NavLink to="/inbox" className={styles.nMenuSelector}>
          <RiNotification4Line className={styles.nMenuIcon}/>
          <span>Inbox</span>
        </NavLink>

      </nav>
    </div>
  )
}

export default NavbarMenu