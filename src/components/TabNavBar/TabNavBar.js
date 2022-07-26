import { NavLink } from 'react-router-dom'
// styles
import styles from './TabNavBar.module.css'

// TODO:  Set props to make this more re-usable
//        for Tasks page and Single Project pages/views

const TabNavBar = () => {
  return (
    <div className={styles.tabNavBarWrap}>
      {/* <NavLink to={`/projects/${project.id}/overview`}> */}
      <NavLink to={`/projects/project:id/overview`}>
        <span>Overview</span>
      </NavLink>
      <NavLink to="/projects">
        <span>List</span>
      </NavLink>
      <NavLink to="/projects">
        <span>Board</span>
      </NavLink>
    </div>
  )
}

export default TabNavBar