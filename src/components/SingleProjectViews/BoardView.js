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

      {/* {userDoc.columns.length > 0 && userDoc.columns.map(column => (
          <div key={column.columnId}>
            <h2>{column.columnName}</h2>
            {userDoc.tasks.length > 0 && userDoc.tasks.map(task => (
              <div key={task.taskId}>
                <h2>{task.taskName}</h2>
                <TaskItem /> 
              </div>
            ))}
          </div>
        ))} */}

      {userDoc.tasks.length > 0 && userDoc.tasks.map(task => (
        <div key={task.taskId}>

        {userDoc.columns.length > 0 && userDoc.columns.map(column => (
          <div key={column.columnId}>
            <h1>{column.columnName}</h1>
            <TaskItem name={task.taskName} />
            {/* <TaskItem name={column.taskName}  columnDetails={column.columns}/> */}
          </div>
         
        ))}


        </div>
      ))}

        {userDoc.tasks.length > 0 && userDoc.tasks.map(task => (
          <div key={task.taskId}>
            <TaskItem name={task.taskName}  columnDetails={task.assignedColumn}/>
          </div>
         
        ))}

      {/* {userDoc.tasks.length > 0 && userDoc.tasks.map(task => (
          <div key={task.taskId}>
            <h2>{task.taskName}: {task.columns.columnName}</h2>
          </div>
        ))} */}

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

          {/* <div className={styles.boardColumnContainer}>
            <div className={styles.boardColumnHeader}>
              <h2>In Progress</h2>  
            </div>
            <div className={styles.boardColumnContent}>
              <TaskItem /> 
              <TaskItem />
              <TaskItem />
            </div>
          </div> */}

          {/* <div className={styles.boardColumnContainer}>
            <div className={styles.boardColumnHeader}>
              <h2>Done</h2>  
            </div>
            <div className={styles.boardColumnContent}>
              <TaskItem /> 
              <TaskItem />
              <TaskItem />
            </div>
          </div> */}

          {/* <div className={styles.boardColumnContainer}>
            <div className={styles.boardColumnHeader}>
              <h2>Done</h2>  
            </div>
            <div className={styles.boardColumnContent}>
              <TaskItem /> 
              <TaskItem />
              <TaskItem />
            </div>
          </div> */}

        </div>
      </div>

      {/* <div>Tasks</div>
      <TaskItem /> */}
      
    </div>
  )
}

export default BoardView