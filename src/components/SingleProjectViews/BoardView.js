import { useOutletContext } from 'react-router-dom';
// components
import TaskItem from '../Board/TaskItem';
// styles
import styles from './BoardView.module.css'

const BoardView = () => {
  const { userDoc } = useOutletContext()
  console.log("BoardView OutletContext: ", userDoc);
  return (
    <div>
      <h1>BoardView</h1>
      <p>Each project will have a bunch of tasks. Tasks will be sortable by Col/category and can be moved between categories/columns.</p>
      <div>Columns - task categories/dynamic aka BoardColumnHeader</div>

      <div className={styles.boardContainer}>
        <div className={styles.boardColumnWrap}>

          <div className={styles.boardColumnContainer}>
            <div className={styles.boardColumnHeader}>
              <h2>ToDo</h2>  
            </div>
            <div className={styles.boardColumnContent}>
              <TaskItem /> 
              <TaskItem />
              <TaskItem />
            </div>
          </div>

          <div className={styles.boardColumnContainer}>
            <div className={styles.boardColumnHeader}>
              <h2>In Progress</h2>  
            </div>
            <div className={styles.boardColumnContent}>
              <TaskItem /> 
              <TaskItem />
              <TaskItem />
            </div>
          </div>

          <div className={styles.boardColumnContainer}>
            <div className={styles.boardColumnHeader}>
              <h2>Done</h2>  
            </div>
            <div className={styles.boardColumnContent}>
              <TaskItem /> 
              <TaskItem />
              <TaskItem />
            </div>
          </div>

          <div className={styles.boardColumnContainer}>
            <div className={styles.boardColumnHeader}>
              <h2>Done</h2>  
            </div>
            <div className={styles.boardColumnContent}>
              <TaskItem /> 
              <TaskItem />
              <TaskItem />
            </div>
          </div>

        </div>
      </div>

      {/* <div>Tasks</div>
      <TaskItem /> */}
      
    </div>
  )
}

export default BoardView