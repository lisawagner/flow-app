import { useState, useRef, useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext'
import Avatar from '../Avatar/Avatar';
// styles
import styles from './TaskItem.module.css'
// icons
import { RiCheckboxCircleFill, RiCheckboxCircleLine, RiMore2Fill } from "react-icons/ri";
import TaskActions from './TaskActions';
// ^ switch between icon types onclick (isDone, setIsDone)


const TaskItem = ({ name, priority, id }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [style, setStyle] = useState({display: 'none'})
  const { user } = useAuthContext()
  const taskBtnRef = useRef()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // const handleClickOutside = (e) => {
  //   if (taskBtnRef.current && !taskBtnRef.current.contains(e.target)) {
  //     setIsOpen(false)
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown",  handleClickOutside);
  // }, [])

  // console.log("Columns: ", columnDetails);

  return (
    <div className={styles.boardCardWrap}>

      <div
        className={styles.boardCardContainer}
        onMouseEnter={e => { setStyle({display: 'flex'}); }}
        onMouseLeave={e => { setStyle({display: 'none'}); }}
      >

        <div className={styles.boardCardContent}>
          
          <div className={styles.boardCardHeader}>
            <div className={styles.completionIndicator}>
              <RiCheckboxCircleLine />
            </div>
            <span>{name}</span>
          </div>

          <div className={styles.priorities}>
            <div className={styles.cellWrapper}>
              <div className={styles.pill}>{priority}</div>
            </div>
          </div>
          
          <div className={styles.boardCardFooter}>
            <div className={styles.cardFooterTop}>
              <div className={styles.boardCardAssignees}>
                <div className={styles.assigneeAvatar}>
                  <Avatar src={user.photoURL}/> 
                </div>
              </div>
            </div>
            <div className={styles.cardFooterBottom} ref={taskBtnRef}>
              <button
                type='button'
                className={styles.cardActions}
                onClick={handleToggle}
                >
                  <RiMore2Fill style={style} />
                </button>
            </div>
          </div>

        </div>
      </div>

      {isOpen && ( <TaskActions setIsOpen={setIsOpen} handler={handleToggle} name={name} id={id}/>)}

    </div>
  )
}

export default TaskItem