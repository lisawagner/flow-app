import styles from './ColumnHeader.module.css'
// icons
import { RiMoreFill } from "react-icons/ri";

const ColumnHeader = ({ colName }) => {
  return (
    <div>
      <div className={styles.boardColumnHeader}>
        <h2>{colName}</h2>
        <RiMoreFill />
      </div>
    </div>
  )
}

export default ColumnHeader