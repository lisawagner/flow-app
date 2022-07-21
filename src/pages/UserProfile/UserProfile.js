import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import { useAuthContext } from '../../hooks/useAuthContext'
// styles
import styles from './UserProfile.module.css'

const UserProfile = () => {
  const { user } = useAuthContext()

  return (
    <div>
      <h1>Welcome, {user.displayName}</h1>
      <div className={styles.userAvatar}>
        <Avatar src={user.photoURL} className={styles.user}/>
      </div>
      
      
    </div>
  )
}

export default UserProfile