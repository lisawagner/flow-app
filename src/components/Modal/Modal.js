import { createPortal } from 'react-dom'
// styles
import styles from './Modal.module.css'

export default function Modal({children, isModal}) {
  return createPortal((
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContainer}>
        <div
          className={styles.modalContent}
          style={{
            // border: "1px solid",
            // borderColor: isModal ? "#ff4500" : "#555",
            // textAlign: "center"
          }}
        >
          {children}
        </div>
      </div>
    </div>
  ), document.body)
}
