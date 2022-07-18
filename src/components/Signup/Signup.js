import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import styles from './Signup.module.css'

// TODO: Refactor login/signup - too much code overlap
// TODO: Consider moving setAvatar to Profile; have default avatar to start

const Signup = ({ isUser, setIsUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error} = useSignup()

  const [avatar, setAvatar] = useState(null)
  const [avatarError, setAvatarError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, displayName, avatar)
    signup(email, password, displayName, avatar)
  }

  const handleAvatar = (e) => {
    setAvatar(null)
    let selected = e.target.files[0]
    console.log(selected);

    if (!selected) {
      setAvatarError('* Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setAvatarError('* Selected file must be an image file')
      return
    }
    if (selected.size > 100000) {
      setAvatarError('* Image size must be less then 100Kb')
      return
    }

    setAvatarError(null)
    setAvatar(selected)
    console.log('Avatar updated!');
  }

  return (
    <div className={styles.signupWrap}>
      <div className={styles.signupContent}>
        <form onSubmit={handleSubmit}>

          <label htmlFor="email" className={styles.formLabel}>
            <input
              id="email"
              // type="email"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              autoComplete='off'
              required
            />
            <span>Email</span>
          </label>
          <label htmlFor="password" className={styles.formLabel}>
            <input
              id="password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              autoComplete='off'
              required
            />
            <span>Password</span>
          </label>
          <label htmlFor="displayName" className={styles.formLabel}>
            <input
              id="text"
              type="text"
              name="text" 
              onChange={(e) => setDisplayName(e.target.value)} 
              value={displayName}
              autoComplete='off'
              required
            />
            <span>Display Name</span>
          </label>
          <label htmlFor="avatar" className={styles.formLabel}>
            <input
              id="file"
              type="file"
              name="file" 
              onChange={handleAvatar} 
              autoComplete='off'
              required
            />
            <span>Avatar</span>
            {avatarError && <div className={styles.errorMsg}>{avatarError}</div>}
          </label>
          {/* <button>Signup</button> */}
          {!isPending && <button>Signup</button>}
          {isPending && <button disabled>loading</button>}
          {error && <p className={styles.errorMsg}>{error}</p>}

        </form>

        <div className={styles.signupFooter}>
        <p>Already a Member?{" "}
            <span onClick={() => setIsUser(!isUser)}>Sign in</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup