import React from 'react'
// styles
import styles from './NavbarInfoHub.module.css'
import { RiInformationLine } from "react-icons/ri";

// add tooltip

const NavbarInfoHub = () => {
  return (
    <div>
      <RiInformationLine className={styles.infoHubIcon}/>
    </div>
  )
}

export default NavbarInfoHub