import { NavLink } from 'react-router-dom'

// styles
import styles from './Navbar.module.css'
import { RiHomeLine, RiCheckboxCircleLine, RiGroupLine, RiDropLine, } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className={styles.flowNavBar}>
      <div className="branded">Flow</div>
      <nav className={styles.flowNav}>
        <div className={styles.navlinks}>
          <NavLink to="/">
            <RiHomeLine />
            <span>Home</span> 
          </NavLink>
          <NavLink to="/tasks">
            <RiCheckboxCircleLine />
            <span>Tasks</span>
          </NavLink>
          <NavLink to="/teams">
            <RiGroupLine />
            <span>Teams</span> 
          </NavLink>
          <NavLink to="/streams">
            <RiDropLine />
            <span>Streams</span>
          </NavLink>
          <NavLink to="/inbox">
            <span>Inbox</span>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar