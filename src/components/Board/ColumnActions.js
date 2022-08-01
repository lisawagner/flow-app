// styles
import styles from './ColumnActions.module.css'
// icons
import { RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
// TODO:  Refactor into reusable components

const ColumnActions = ({ handler }) => {
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
                  <span>Edit column name</span>
                </button>
              </div>

              <span className={styles.actionSpacer}></span>

              <div >
                <button
                  className={`${styles.actionsItemBtn} ${styles.delete}`}
                  onClick={handler}
                  >
                    <RiDeleteBinLine className={styles.actionsIcon}/>
                    <span>Delete column</span> 
                </button>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default ColumnActions