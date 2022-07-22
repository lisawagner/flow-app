import { useCollection } from '../../hooks/useCollection'

// components
import Avatar from '../Avatar/Avatar'

// styles
import styles from './UserBar.module.css'

function UserBar() {
  const { error, documents } = useCollection('users')

  return (
    <div className={styles.userList}>
      <h2>People</h2>
      {error && <div>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className={styles.userListItem}>
          
          <Avatar src={user.photoURL} />
          <div>{user.displayName}</div>
          {user.online && <span className={styles.userOnline}></span>}
        </div>
      ))}
    </div>
  )
}

export default UserBar