import { useState } from 'react'
import { useEffect } from 'react'
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

export const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState(false)

    const handleInputChange = (event) => {
        const {value, placeholder} = event.target
        switch(placeholder) {
            case 'Name':
                setName(value)
                break
            case 'Email':
                setEmail(value)
                break
            case 'Password':
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
        <form>
            <input type="text" placeholder="Name" value={name} onChange={handleInputChange} />
            <input type="email" placeholder="Email" value={email} onChange={handleInputChange}/>
            <div>
                <input type={type?"text":"password"} placeholder="Password" value={password} onChange={handleInputChange}/>
                <button type="button" onClick={handleTypeChange}>{type?<FaEye size={20}/>:<LuEyeClosed size={20}/>}</button>
            </div>
            <button type="submit">Register</button>
        </form>
    </>
}