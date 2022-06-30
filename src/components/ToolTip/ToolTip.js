// styles
import styles from './ToolTip.module.css'

const ToolTip = (props) => {

  return (
    <div className={styles.toolTipContainer}>
      <div className={`${styles.toolTipWrap} ${styles[props.direction]}`}>
        {props.content}
      </div>
    </div>
  )
}

export default ToolTip
