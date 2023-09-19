import Link from "next/link";

import styles from "@/components/Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} href="https://www.instagram.com/" target="_blank">Instagram</Link>
          </li>
          <li>
            <Link className={styles.linkWithoutBefore} href="https://www.youtube.com/" target="_blank">Youtube</Link>
          </li>
        </ul>        
      </nav>
      <p className={styles.copyright}>&copy; Copyright 2023</p>
    </footer>
  )
}

export default Footer;