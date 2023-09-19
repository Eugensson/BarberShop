import CardList from "@/components/CardList/CardList";
import { teamList } from "@/data";

import styles from "@/sections/OurBarbers/OurBarbers.module.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic"],
  variable: "--font-raleway",
  weight: ["700"],
});

const OurBarbers = () => {
  return (
    <section className={styles.wrapper}>
        <h4>For true enjoyers of the atmosphere</h4>
        <h2 className={raleway.className} >Our barbers</h2>        
        <CardList data={teamList}/>
    </section>
  )
}

export default OurBarbers;