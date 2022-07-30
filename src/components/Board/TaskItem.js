import Avatar from '../Avatar/Avatar';
import { useAuthContext } from '../../hooks/useAuthContext'
// styles
import styles from './TaskItem.module.css'
// icons
import { RiCheckboxCircleFill, RiCheckboxCircleLine } from "react-icons/ri";
// ^ switch between icon types onclick (isDone, setIsDone)

// TODO: add onhover effect to show task menu: edit/delete/markcomplete button

const TaskItem = ({ name, columnDetails }) => {
  const { user } = useAuthContext()

  console.log("Columns: ", columnDetails);

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
        </div>
      </div>

    </div>
  )
}

export default TaskItem