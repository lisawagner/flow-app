import { useState } from 'react'
// import { useSignup } from '../../hooks/useSignup'

// styles
import styles from './Signup.module.css'

// TODO: Refactor login/signup - too much code overlap

const Signup = ({ isUser, setIsUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  // const { signup, isPending, error} = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, displayName)
    // signup(email, password, displayName)
  }

  return (
    <div className={styles.signupWrap}>
      <div className={styles.signupContent}>
        <form onSubmit={handleSubmit}>

          <label for="email" className={styles.formLabel}>
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
          <label for="password" className={styles.formLabel}>
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
          <label for="displayName" className={styles.formLabel}>
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
          <button>Signup</button>
          {/* {!isPending && <button>Signup</button>}
          {isPending && <button disabled>loading</button>}
          {error && <p className={styles.errorMsg}>{error}</p>} */}

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