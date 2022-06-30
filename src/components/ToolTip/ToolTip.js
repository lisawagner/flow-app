import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './ToolTip.module.css'

const modalRoot = document.getElementById("infoHub")

const ToolTip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false)



  return (
    <div className={styles.toolTipContainer}>
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className={styles.toolTipRight}>{content}</div>
      )}
    </div>
  )
}

export default ToolTip