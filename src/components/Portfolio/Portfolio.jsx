import PortfolioList from "@/components/PortfolioList/PortfolioList";
import {portfolioList} from "@/data";

import styles from "@/components/Portfolio/Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={styles.wrapper}>
        <h3 className={styles.subTitle}>In Latin, &quot;barba&quot; means &quot;beard&quot;</h3>
        <h2 className="visuallyHidden" >Portfolio</h2>
        <PortfolioList data={portfolioList}/>
    </section>
  )
}

export default Portfolio;