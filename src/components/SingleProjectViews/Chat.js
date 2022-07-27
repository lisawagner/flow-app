import { useState } from 'react'
import { Timestamp } from 'firebase/firestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import Avatar from '../Avatar/Avatar'
// styles
import styles from './Chat.module.css'

const Chat = ({document}) => {
  const { user } = useAuthContext()
  const [newMessage, setNewMessage] = useState('')
  const {editDocument, response} = useFirestore('projects')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newMessage,
      createdAt: Timestamp.fromDate(new Date()),
      id: Math.random()
    }
    console.log(messageToAdd)

    await editDocument(document.id, {
      comments: [...document.comments, messageToAdd],
    })
    if (!response.error) {
      setNewMessage('')
    }
  }

  return (
    <div className={styles.projectChatWrap}>

      <div className={styles.pChatContent}>
        <h2>{document.name} Chat</h2>

        <ul className={styles.msgList}>
        {document.comments.length > 0 && document.comments.map(message => (
          <li key={message.id} className={styles.msgListItem}>
            <div className={styles.msgAuthor}>
              <Avatar src={message.photoURL} />
            </div>
            <div className={styles.msgDetails}>
              <div className={styles.msgDetailsHeader}>
                <span>{message.displayName}</span>
                <span className={styles.msgDate}>date here</span>
              </div>
              <div className={styles.msgContent}>
                <p>{message.content}</p>
              </div>
            </div>
            
          </li>
        ))}
      </ul>

        <form className={styles.addMsg} onSubmit={handleSubmit}>
          <label htmlFor="newMessage" className={styles.chatInput}>
            <textarea
              cols="36"
              required
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
              placeholder="message..."
            ></textarea>
          </label>
          <div className={styles.msgBtnWrap}>
            <button className={styles.addMsgBtn}>Add Message</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default Chat