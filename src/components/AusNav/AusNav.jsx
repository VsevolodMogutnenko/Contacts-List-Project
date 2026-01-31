import { Link } from 'react-router-dom'
import styles from "./AusNav.module.css"

export const AusNav = () => {
    return (
        <>
            <li><Link to="/Login" className={styles.navLink}>Login</Link></li>
            <li><Link to="/Register" className={styles.navLink}>Register</Link></li>
        </>
    )
}