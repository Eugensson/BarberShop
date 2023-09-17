import Logo from "@/components/Logo/Logo";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic"],
  variable: "--font-raleway",
  weight: ["700"],
});

import styles from "@/components/Header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}><Logo/></li>
                <li className={styles.item}><span className={styles.burger} type="button"></span></li>
            </ul>
        </nav>
        <div className={styles.contentWrapper}>
            <h3 className={styles.subTitle}>A hair salon for men in Kyiv</h3>
            <h2 className={raleway.className} >BarberShop</h2>
            <div>
                <p className={styles.text}>We are experts in trendy men’s haircuts.</p>
                <p className={styles.text}>We work quickly, carefully and with style.</p>
            </div>
        </div>
    </header>
  )
}

export default Header