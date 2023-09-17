import LinkBtn from "@/components/LinkBtn/LinkBtn";

import styles from "@/components/ServicesAndPrices/ServicesAndPrices.module.css";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic"],
  variable: "--font-raleway",
  weight: ["700"],
});

const ServicesAndPrices = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.subTitle}>Spend your time with the best masters</h3>
      <h2 className={raleway.className} >Services and prices</h2>
      <ul className={styles.pricesList}>
        <li className={styles.pricesItem}>
          <p className={styles.text}>Men&#x2019;s haircut</p>
          <p className={styles.text}>from 300 uah.</p>
        </li>
        <li className={styles.pricesItem}>
          <p className={styles.text}>Beard trim</p>
          <p className={styles.text}>from 200 uah.</p>
        </li>
        <li className={styles.pricesItem}>
          <p className={styles.text}>Mustache trim</p>
          <p className={styles.text}>from 200 uah.</p>
        </li>
        <li className={styles.pricesItem}>
          <p className={styles.text}>Straight razor shave</p>
          <p className={styles.text}>from 200 uah.</p>
        </li>
        <li className={styles.pricesItem}>
          <p className={styles.text}>Trainee&#x2019;s haircut</p>
          <p className={styles.text}>from 50 uah.</p>
        </li>
        <li className={styles.pricesItem}>
          <p className={styles.text}>Haircut under the nozzle</p>
          <p className={styles.text}>from 200 uah.</p>
        </li>
        <li className={styles.pricesItem}>
          <p className={styles.text}>Children&#x2019;s haircut (0-12 y.o.)</p>
          <p className={styles.text}>from 300 uah.</p>
        </li>
        <li className={styles.pricesItem}>
          <p className={styles.text}>Camouflage of grey hair</p>
          <p className={styles.text}>from 200 uah.</p>
        </li>
      </ul>
      <LinkBtn />
    </section>
  )
}

export default ServicesAndPrices;