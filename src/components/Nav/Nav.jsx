import { Link } from 'react-router-dom'
import { AusNav } from '../AusNav/AusNav'
import logo from '../../assets/logo.png'

export const Nav = () => {
    return (
        <ul>
            <li><Link to="/"><img src={logo} alt="logo" width={100}/></Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/PhoneBook">PhoneBook</Link></li>
            <AusNav />
        </ul>
    )
}