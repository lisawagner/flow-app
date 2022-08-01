import styles from './TaskActions.module.css'
// icons
import { RiDeleteBinLine, RiPencilLine } from "react-icons/ri";

const TaskActions = ({ handler }) => {

  return (
    <div>
        <div className={styles.dropDownContainer}>
          <div className={styles.dropDownWrap}>
            <div className={styles.actionsDropdown}>

              <div >
                <button
                  className={styles.actionsItemBtn}
                  onClick={handler}
                >
                  <RiPencilLine className={styles.actionsIcon}/>
                  <span>Edit task details</span>
                </button>
              </div>

              <span className={styles.actionSpacer}></span>

              <div >
                <button
                  className={`${styles.actionsItemBtn} ${styles.delete}`}
                  onClick={handler}
                  >
                    <RiDeleteBinLine className={styles.actionsIcon}/>
                    <span>Delete task</span> 
                </button>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default TaskActions