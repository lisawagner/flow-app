import { useOutletContext } from 'react-router-dom';
import Avatar from '../Avatar/Avatar'
// styles
import styles from './Overview.module.css'


const Overview = () => {
  const { userDoc } = useOutletContext()
  console.log("OutletContext: ", userDoc);
  return (
    <div className={styles.overWrap}>
      <div className={styles.overContainer}>
        <div className={styles.summaryWrap}>
          <h2>Summary</h2>
          <p>{userDoc.details}</p>
        </div>
        <div className={styles.teamWrap}>
          <h2>Project Team</h2>
          <div className={styles.assignedUsers}>
            {userDoc.assignedUsersList.map(user => (
              <div key={user.id}>
                <Avatar src={user.photoURL} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.msgsWrap}>
          <h2>Messages</h2>
          <p>{userDoc.category}</p>
        </div>
      </div>
    </div>
  )
}

export default Overview