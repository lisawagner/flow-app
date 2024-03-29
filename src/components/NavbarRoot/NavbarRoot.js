import React from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarInfoHub from './NavbarInfoHub'
import NavbarMenu from './NavbarMenu'
// import NavbarPriorities from './NavbarPriorities'

// styles
import styles from './NavbarRoot.module.css'

const NavbarRoot = () => {
  return (
    <div className={styles.nRootWrap}>
      <div className={styles.nHeaderTop}>
        <div className={styles.nHeader}><NavbarHeader /></div>
        <span className={styles.nItem}></span>
        <div className={styles.nMenu}><NavbarMenu /></div>
        {/* <div className={styles.nPriorities}><NavbarPriorities /></div> */}
      </div>
      
      <div className={styles.nHeaderBottom}>
        <span className={styles.nItem}></span>
        <div className={styles.nInfoHub}><NavbarInfoHub /></div>   
      </div>

       
    </div>
  )
}

export default NavbarRoot