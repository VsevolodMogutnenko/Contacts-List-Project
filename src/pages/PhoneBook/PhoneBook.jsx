import { FaDeleteLeft } from "react-icons/fa6";
import styles from "./PhoneBook.module.css"

export const PhoneBook = () => {
  return <>
    <div className={styles.container}>
      <h1>PhoneBook</h1>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search contact" className={styles.searchInput}/>
        <button type="submit" className={styles.clearButton}><FaDeleteLeft size={26} /></button>
      </div>
      <button type="submit" className={styles.addButton}>Add contact</button>
    </div>
  </>
}
