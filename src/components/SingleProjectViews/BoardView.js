import { useOutletContext } from 'react-router-dom';
import ColumnHeader from '../Board/ColumnHeader';
// components
import TaskItem from '../Board/TaskItem';
// styles
import styles from './BoardView.module.css'


const BoardView = () => {
  const { userDoc } = useOutletContext()

  // const categorizedData = userDoc.tasks.reduce((acc, curr) => {
  //   const { taskId, taskName, assignedColumn} = curr

  //   if(!acc[assignedColumn]) {
  //     acc[assignedColumn] = {
  //       items: [],
  //     }
  //   }
  //   acc[assignedColumn].items.push(taskName)

  //   return acc
  // }, {})

  // console.log("Data by Column: ", categorizedData)

  // Object.keys(categorizedData).map((key, index) => {
  //   console.log((`Category: ${key}`))
  //   categorizedData[key].items.map((item, index) => 
  //     console.log((`Item ${index}: ${item}`))
  //   )
  // })

  // mapping and filtering reduce -> functional programming
  const columnTasks = userDoc.columns.map((c)=>{
    c.tasks = userDoc.tasks.filter(t => t.assignedColumn === c.columnId);
    return c;
   })
    console.log('THIS: ', columnTasks);

  return (
    <div>
      <div className={styles.boardContainer}>
        <div className={styles.boardColumnWrap}>

          {columnTasks.map(column => (
            <div className={styles.boardColumnContainer} key={column.columnId}>
              <ColumnHeader colName={column.columnName} />
              {column.tasks.map(task => (
                <div key={task.taskId} className={styles.boardColumnContent}>
                  <TaskItem name={task.taskName} />
                </div>
              ))}
            </div>  
          ))}

        </div>
      </div> 
    </div>
  )
}

export default BoardView


// {columnTasks.map(column => (
//   <div className={styles.boardColumnWrap}>
//       <div className={styles.boardColumnContainer} key={column.columnId}>
//         <div className={styles.boardColumnHeader}>
//           <h1>{column.columnName}</h1>
//         </div>
//         {column.tasks.map(task => (
          
//           <div draggable="true" className={styles.boardColumnContent}>
//             <TaskItem name={task.taskName} key={task.taskId} />
//           </div>

//         ))}
//       </div>
//       </div>
      
//   ))}

// -------------------------------------------------------------------

// {columnTasks.map(column => (
//   <div key={column.columnId}>
//     <h1>{column.columnName}</h1>
//     {column.tasks.map(task => (
//       // <div></div>
//       <TaskItem name={task.taskName} key={task.taskId} />
//     ))}
//   </div>
// ))}

//  ---------------------------------------------------------------------

// {userDoc.tasks.length > 0 && userDoc.tasks.map(task => (
//   <div key={task.taskId}>
//     <TaskItem name={task.taskName}  columnDetails={task.assignedColumn}/>
//   </div>
// ))}