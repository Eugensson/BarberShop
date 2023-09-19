import Logo from "@/components/Logo/Logo";
import { useMobileMenu } from '@/context/MobileMenuContext';

import styles from "@/components/Navigation/Navigation.module.css";

const Navigation = () => {
  const {openMobileMenu } = useMobileMenu();

  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            <li className={styles.item}><Logo/></li>
            <li className={styles.item}>
              <div className={styles.burgerWrapper}>
                <span className={styles.burger} type="button" onClick={openMobileMenu}></span>
              </div>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation;