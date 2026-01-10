import { useState } from 'react'
import { useEffect } from 'react'

export const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleInputChange = (event) => {
      console.log(event.target.placeholder)
      // switch(event) {
      //   case name:
      //     console.log('name')
      //     break
      //   case email:
      //     console.log('email')
      //     break
      // }
    }

    return <>
        <form>
            <input type="text" placeholder="Name" value={name} onChange={handleInputChange} />
            <input type="email" placeholder="Email" value={email} onChange={handleInputChange}/>
            <input type="password" placeholder="Password" value={password} onChange={handleInputChange}/>
            <button type="submit">Register</button>
        </form>
    </>
}