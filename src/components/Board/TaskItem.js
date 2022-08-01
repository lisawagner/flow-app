import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext'
import Avatar from '../Avatar/Avatar';
// styles
import styles from './TaskItem.module.css'
// icons
import { RiCheckboxCircleFill, RiCheckboxCircleLine, RiMore2Fill, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import TaskActions from './TaskActions';
// ^ switch between icon types onclick (isDone, setIsDone)



const TaskItem = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { user } = useAuthContext()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // console.log("Columns: ", columnDetails);

  return (
    <div className={styles.boardCardWrap}>

      <div className={styles.boardCardContainer}>

        <div className={styles.boardCardContent}>
          <div className={styles.boardCardHeader}>
            <div className={styles.completionIndicator}>
              <RiCheckboxCircleLine />
            </div>
            {/* <h3>TaskItemName</h3> */}
            <span>{name}</span>
          </div>
          {/* <span>createdAt (needed?)</span> */}
          <div className={styles.priorities}>
            <div className={styles.cellWrapper}>
              <div className={styles.pill}>priorityLevel</div>
            </div>
          </div>
          <div className={styles.boardCardFooter}>
            <div className={styles.cardFooterTop}>
              <div className={styles.boardCardAssignees}>
                <div className={styles.assigneeAvatar}>
                <Avatar src={user.photoURL}/> 
                </div>
              </div>
              <div className={styles.dueDateWrap}>
                <div className={styles.dueDateContainer}>
                  <span>dueDate</span>
                </div>
              </div>
            </div>

            <div className={styles.cardFooterBottom}>
              <button
                type='button'
                className={styles.cardActions}
                onClick={handleToggle}
                >
                  <RiMore2Fill />
                </button>
            </div>
          </div>

        </div>
        
        
      </div>

      {isOpen && ( <TaskActions handler={handleToggle}/>)}

    </div>
  )
}

export default TaskItem