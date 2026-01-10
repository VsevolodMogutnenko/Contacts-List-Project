import { Link } from 'react-router-dom'

export const AusNav = () => {
    return (
        <>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Register">Register</Link></li>
        </>
    )
}