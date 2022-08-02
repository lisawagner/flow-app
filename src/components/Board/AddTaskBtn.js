import { useState } from 'react';
import Modal from '../../components/Modal/Modal'
// styles
import styles from './AddTaskBtn.module.css'
import { RiAddFill } from "react-icons/ri"
import AddTaskForm from '../TaskForms/AddTaskForm';

const AddTaskBtn = () => {
  // const [isNewTask, setIsNewTask] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleAddTask = () => {
    // setIsNewTask(!isNewTask)
    setShowModal(!showModal)
  }

  const handleClose = () => {
    setShowModal(!showModal)
  }

  return (
    <div>
      <div className={styles.addTaskBtnWrap}>
        <div
          className={styles.addTaskBtn}
          role="button"
          tabIndex="0"
          onClick={handleAddTask}
        >
          <RiAddFill />
        </div>
      </div>
      {showModal && (
        <Modal>
          <AddTaskForm onClose={handleClose} />
        </Modal>
      )}

      {/* {isNewTask && (
        <div>newtask</div>
      )} */}
    </div>
  )
}

export default AddTaskBtn