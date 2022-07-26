import { NavLink } from 'react-router-dom'
// styles
import styles from './TabNavBar.module.css'

// TODO:  Set props to make this more re-usable
//        for Tasks page and Single Project pages/views

const TabNavBar = () => {
  return (
    <div className={styles.tabNavBarWrap}>
      <div className={styles.tabNavBarContainer}>
        <div className={styles.tabNavItem}>
          <NavLink to="overview">
            <span>Overview</span>
          </NavLink>
        </div>
        <div className={styles.tabNavItem}>
          <NavLink to="list">
            <span>List</span>
          </NavLink>
        </div>
        <div className={styles.tabNavItem}>
          <NavLink to="board">
            <span>Board</span>
          </NavLink>
        </div>
      </div>

    </div>
  )
}

export default TabNavBar