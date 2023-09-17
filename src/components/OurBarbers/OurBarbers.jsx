import CardList from "../CardList/CardList";

import { teamList } from "@/data";

import styles from "@/components/OurBarbers/OurBarbers.module.css";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic"],
  variable: "--font-raleway",
  weight: ["700"],
});

const OurBarbers = () => {
  return (
    <section className={styles.wrapper}>
        <h3 className={styles.subTitle}>For true enjoyers of the atmosphere</h3>
        <h2 className={`${raleway.className} ${styles.title}`} >Our barbers</h2>        
        <CardList data={teamList}/>
    </section>
  )
}

export default OurBarbers;