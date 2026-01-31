import { useState } from 'react'
import { useEffect } from 'react'
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import styles from "./Login.module.css"
import { Link } from 'react-router-dom'

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [type, setType] = useState(false)

  const handleInputChange = (event) => {
    const {value, placeholder} = event.target
    switch(placeholder) {
      case 'Enter your email':
        setEmail(value)
        break
      case 'Enter your password':
        setPassword(value)
        break
      default:
        break
    }
  }

  const handleTypeChange = () => {
    if(type === false) {
      setType(true)
    } else {
      setType(false)
    }
  }

  return <>
    <form className={styles.form}>
      <h1>Login</h1>
      <label>
          Email
          <input type="email" placeholder="Enter your email" value={email} onChange={handleInputChange} className={styles.input}/>
      </label>
      <div className={styles.showContainer}>
          <label>
              Password
              <input type={type?"text":"password"} placeholder="Enter your password" value={password} onChange={handleInputChange} className={styles.showInput}/>
          </label>
          <button type="button" onClick={handleTypeChange} className={styles.showButton}>{type?<FaEye size={26}/>:<LuEyeClosed size={26}/>}</button>
      </div>
      <button type="submit" className={styles.submitButton}>Login</button>
      <Link to="/Register" className={styles.extraLink}>Don't have an account yet?</Link>
    </form>
  </>
}