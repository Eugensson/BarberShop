import styles from  "@/sections/Preference/Preference.module.css";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic"],
  variable: "--font-raleway",
  weight: ["700"],
});


const Preference = () => {
  return (
    <section className={styles.wrapper}>
        <h4>Old traditional school</h4>
        <h2 className={raleway.className}>¿Why people come to us?</h2>
        <p className={styles.text}>Only good things are said about us. But it&#x2019;s better to see and feel 1 time than read 10 times. </p>
        <ul className={styles.list}>
            <li className={styles.item}>
                <div className={styles.indicator}>
                    <p className={styles.indicatorValue}>600</p>
                    <p className={styles.indicatorText}>Satisfied customers per day</p>
                </div>
            </li>
            <li className={styles.item}>
                <div className={`${styles.indicator} ${styles.second}`}>
                    <p className={styles.indicatorValue}>50</p>
                    <p className={styles.indicatorText}>Awards for excellent service</p>
                </div>
            </li>
            <li className={styles.item}>
                <div className={styles.indicator}>
                    <p className={styles.indicatorValue}>20</p>
                    <p className={styles.indicatorText}>Kyiv&#x2019;s best barbers</p>
                </div>
            </li>
            <li className={styles.item}>
                <div className={`${styles.indicator} ${styles.fourth}`}>
                    <p className={styles.indicatorValue}>100</p>
                    <p className={styles.indicatorText}>Gifts for regular customers</p>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default Preference