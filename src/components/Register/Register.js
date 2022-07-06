import React from 'react'

const Register = ({ isUser, setIsUser }) => {
  return (
    <>
    <h1>Register Component</h1>
    <a onClick={() => setIsUser(!isUser)}>-Login-</a>
  </>
  )
}

export default Register