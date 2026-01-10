import styles from './Header.module.css'
import { Nav } from '../Nav/Nav.jsx'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <Nav />
            </nav>
        </header>
    )
}