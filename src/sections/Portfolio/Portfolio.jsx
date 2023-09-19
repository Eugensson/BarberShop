import PortfolioList from "@/components/PortfolioList/PortfolioList";
import {portfolioList} from "@/data";

import styles from "@/sections/Portfolio/Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={styles.wrapper}>
        <h4 className={styles.h4}>In Latin, &quot;barba&quot; means &quot;beard&quot;</h4>
        <h2 className="visuallyHidden" >Portfolio</h2>
        <PortfolioList data={portfolioList}/>
    </section>
  )
}

export default Portfolio;