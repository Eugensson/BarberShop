import Link from 'next/link';
import LinkBtn from "@/components/LinkBtn/LinkBtn";

import { useMobileMenu } from '@/context/MobileMenuContext';

import styles from '@/components/MobileMenu/MobileMenu.module.css'

export default function MobileMenu() {
  const { closeMobileMenu } = useMobileMenu();

  return (
    <div className={styles.wrapper}>      
      <button type='button' className={styles.closeBtn} onClick={closeMobileMenu}></button>
      <nav className={styles.nav}>
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link className={styles.link} href="/" onClick={closeMobileMenu}>About</Link>
                <Link className={styles.link} href="/" onClick={closeMobileMenu}>Services and pricules</Link>
                <Link className={styles.link} href="/" onClick={closeMobileMenu}>Barbers</Link>
                <Link className={styles.link} href="/" onClick={closeMobileMenu}>Contacts</Link>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="tel:+380441111111" arial-label="Icon Phone">+38 044 111 11 11</a>                
                <LinkBtn text="Online-booking" styleName="secondaryLinkBtn" />
            </li>
            <li className={styles.item}>
                <Link className={styles.social} href="/" onClick={closeMobileMenu}>Instagram</Link>
                <Link className={styles.social} href="/" onClick={closeMobileMenu}>Youtube</Link>
            </li>
        </ul>                    
      </nav>      
    </div>)
};