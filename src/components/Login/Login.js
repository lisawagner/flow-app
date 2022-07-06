import { useState } from 'react'
// import { useLogin } from '../../hooks/useLogin'

// styles
import styles from './Login.module.css'

const Login = ({ isUser, setIsUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const { login, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    // login(email, password)
  }
  return (
    <div className={styles.loginWrap}>
      <div className={styles.loginContent}>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Email:</span>
            <input 
              type="email" 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              autoComplete='on'
            />
          </label>
          <label>
            <span>Password:</span>
            <input 
              type="password" 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              autoComplete='on'
            />
          </label>
          <button className="btn">Login</button>
          {/* { error && <p className={styles.errorMsg}>{error}</p> } */}

        </form>
        <div className={styles.loginFooter}></div>
      </div>

      
      <a onClick={() => setIsUser(!isUser)}>-Register-</a>
    </div>
  )
}

export default Login