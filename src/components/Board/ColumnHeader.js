import { useState, useRef, useEffect } from 'react'
import ColumnActions from './ColumnActions';
// styles
import styles from './ColumnHeader.module.css'
// icons
import { RiMoreFill } from "react-icons/ri";
import AddTaskBtn from './AddTaskBtn';

const ColumnHeader = ({ colName }) => {
  const [isOpen, setIsOpen] = useState(false)
  const colBtnRef = useRef()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (e) => {
    if (colBtnRef.current && !colBtnRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown",  handleClickOutside);
  }, [])

  return (
    <div>
      <div className={styles.boardColumnHeader}>
        <h2>{colName}</h2>

        <div className={styles.colHeaderRight}>
        <AddTaskBtn />
        <div className={styles.colActionsBtnWrap} ref={colBtnRef}>
          <button
            type='button'
            className={styles.colActionsBtn}
            onClick={handleToggle}
          >
            <RiMoreFill />
          </button>
        </div>
        </div>
      </div>

      {isOpen && ( <ColumnActions handler={handleToggle}/>)}

    </div>
  )
}

export default ColumnHeader