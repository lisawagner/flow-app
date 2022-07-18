import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

// styles
import styles from './Login.module.css'

// TODO:  - issue with <input type="email"/> collapsing when input:invalid
//        - quickfix done by setting <input type="text"/> for email input
//        - after connecting w/firebase, look into alternatives

const Login = ({ isUser, setIsUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    login(email, password)
  }
  return (
    <div className={styles.loginWrap}>
      <div className={styles.loginContent}>
        <form onSubmit={handleSubmit}>

          <label htmlFor="email" className={styles.formLabel}>
            <input 
              id="email"
              // type="email"
              type="text"
              name="email"
              // placeholder="me@example.com"
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              autoComplete='off'
              required
                  
              // autoFocus
            />
            <span>Email</span>
          </label>

          <label htmlFor="password" className={styles.formLabel}>
            
            <input
              id="password"
              type="password"
              name="password"
              // placeholder="********"
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              autoComplete='off'
              required
            />
            <span>Password</span>
          </label>
          <button>Login</button>
          { error && <p className={styles.errorMsg}>{error}</p> }

        </form>

        <div className={styles.loginFooter}>
          <p>New to Flow?{" "}
            <span onClick={() => setIsUser(!isUser)}>Sign up</span>
          </p>
        </div>

      </div>

      
      
    </div>
  )
}

export default Login