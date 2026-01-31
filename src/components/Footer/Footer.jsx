import styles from './Footer.module.css'
import { BsGithub, BsInstagram, BsFacebook, BsTwitterX, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <ul className={styles.footerList}>
                <li><a href="https://github.com/VsevolodMogutnenko/Contacts-List-Project" target='_blank' className={styles.footerLink}><BsGithub size={40}/></a></li>
                <li><a href="https://www.instagram.com/" target='_blank' className={styles.footerLink}><BsInstagram size={40}/></a></li>
                <li><a href="https://www.facebook.com/" target='_blank' className={styles.footerLink}><BsFacebook size={40}/></a></li>
                <li><a href="https://www.x.com/" target='_blank' className={styles.footerLink}><BsTwitterX size={40}/></a></li>
                <li><a href="https://www.linkedin.com/" target='_blank' className={styles.footerLink}><BsLinkedin size={40}/></a></li>
            </ul>
            <p className={styles.footerRights}>All rights reserved &copy;</p>
        </footer>
    )
}