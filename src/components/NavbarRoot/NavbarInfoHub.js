import React from 'react'
import ToolTip from '../ToolTip/ToolTip';
// styles
import styles from './NavbarInfoHub.module.css'
import { RiInformationLine } from "react-icons/ri";

// add tooltip

const NavbarInfoHub = () => {
  return (
    <div>
      <ToolTip content="Hello!" id="infoHub">
        <RiInformationLine className={styles.infoHubIcon}/>
      </ToolTip>
    </div>
  )
}

export default NavbarInfoHub