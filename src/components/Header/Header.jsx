'use client';

import { useMobileMenu } from '@/context/MobileMenuContext';
import Navigation from '@/components/Navigation/Navigation';
import MobileMenu from "@/components/MobileMenu/MobileMenu";

import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ["cyrillic"],
  variable: "--font-raleway",
  weight: ["700"],
});
import styles from "@/components/Header/Header.module.css";


const Header = () => {
  const {isMobileMenuOpen } = useMobileMenu();

  return (
    <header className={styles.wrapper}>
        <Navigation />        
        {isMobileMenuOpen && <MobileMenu/>}
        <div className={styles.contentWrapper}>
            <h4 className={styles.h4}>A hair salon for men in Kyiv</h4>
            <h1 className={raleway.className} >BarberShop</h1>
            <p className={styles.text}>We are experts in trendy men&#x2019;s haircuts.<br/>We work quickly, carefully and with style.</p>
        </div>
    </header>
  )
}

export default Header;