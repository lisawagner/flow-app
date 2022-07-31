import styles from './TaskActions.module.css'
// icons
import { RiDeleteBinLine, RiPencilLine } from "react-icons/ri";

const TaskActions = ({ setIsOpen, isOpen}) => {
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
        <div className={styles.dropDownContainer}>
          <div className={styles.dropDownWrap}>
            <div className={styles.actionsDropdown}>

              <div >
                <button
                  className={styles.actionsItemBtn}
                  onClick={handleToggle}
                >
                  <RiPencilLine className={styles.actionsIcon}/>
                  <span>Edit project details</span>
                </button>
              </div>

              <span className={styles.actionSpacer}></span>

              <div >
                <button
                  className={`${styles.actionsItemBtn} ${styles.delete}`}
                  onClick={handleToggle}
                  >
                    <RiDeleteBinLine className={styles.actionsIcon}/>
                    <span>Delete project</span> 
                </button>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default TaskActions