import { useState } from 'react'

// styles
import styles from './NavbarInfoHub.module.css'
import { RiInformationLine } from "react-icons/ri";

// components
import ToolTip from '../ToolTip/ToolTip';


const NavbarInfoHub = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <span
        onMouseEnter={() => setIsVisible(!isVisible)}
        onMouseLeave={() => setIsVisible(!isVisible)}
      >
        <RiInformationLine className={styles.infoHubIcon}/>  
      </span>

      {isVisible && (
        <ToolTip
          direction="right"
          content="Flow | A Project Management App Created by Lisa Wagner"
        />
      )}
      
    </div>
  )
}

export default NavbarInfoHub
