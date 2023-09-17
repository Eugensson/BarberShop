import PortfolioItem from "@/components/PortfolioItem/PortfolioItem";

import styles from "@/components/PortfolioList/PortfolioList.module.css";

const PortfolioList = ({data}) => {
  return (
    <ul className={styles.list}>
        {data.map(item => {
          return (
            <li key={item.id} className={styles.item}>
              <PortfolioItem imageUrl={item.imageUrl} />                
            </li>
          );
        })}
    </ul>
  )
}

export default PortfolioList;