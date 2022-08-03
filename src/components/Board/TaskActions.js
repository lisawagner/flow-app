import { useState, useRef, useEffect } from 'react'
// import { useOutletContext } from 'react-router-dom';
import Modal from '../../components/Modal/Modal'
import EditTaskForm from '../../components/TaskForms/EditTaskForm'

// styles
import styles from './TaskActions.module.css'
// icons
import { RiDeleteBinLine, RiPencilLine } from "react-icons/ri";

const TaskActions = ({ handler, id, name, priority, lane, setIsOpen }) => {
  const [showModal, setShowModal] = useState(false)
  // const { userDoc } = useOutletContext()

  const handleEdit = () => {
    setShowModal(true)
    console.log('MODAL!');
  }

  const handleClick = () => {
    console.log('MODAL!!!!!!!!!!!!');
  }

  const handleClose = () => {
    setShowModal(!showModal)
    setIsOpen(false)
  }


  return (
    <>
        <div className={styles.dropDownContainer}>
          <div className={styles.dropDownWrap}>
            <div className={styles.actionsDropdown}>

              <div >
                <button
                  className={styles.actionsItemBtn}
                  onClick={() => handleEdit()}
                  // onClick={handleClick}
                >
                  <RiPencilLine className={styles.actionsIcon}/>
                  <span>Edit TASK details</span>
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

        {showModal && ( 
        <Modal>
          <EditTaskForm onClose={handleClose} id={id} name={name} taskPriority={priority} lane={lane}/>
        </Modal> )}
        

        </div>
    </>
  )
}

export default TaskActions