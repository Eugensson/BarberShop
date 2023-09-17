import Card from "@/components/Card/Card";

import styles from "@/components/CardList/CardList.module.css";

const CardList = ({data}) => {
  return (
    <ul className={styles.list}>
        {data.map(item => {
            return (
                <li key={item.id} className={styles.item}>
                    <Card
                        imageUrl={item.imageUrl}
                        title={item.title}
                        subtitle={item.subtitle}
                        instagramURL={item.instagramURL}
                        twitterURL={item.twitterURL}
                        facebookURL={item.facebookURL}
                        linkInURL={item.linkInURL}
                    />                
                </li>
            );
        })}
    </ul>
  )
}


export default CardList;