import Image from "next/image";
import Social from "@/components/Social/Social";

import styles from  "@/components/CardItem/CardItem.module.css";

const CardItem = ({ imageUrl, title, subtitle, instagramURL, twitterURL, facebookURL, linkInURL }) => {
  return (
    <section className={styles.wrapper}>        
        <div className={styles.imgThumb}>
          <Image
            priority
            src={imageUrl}
            fill
            sizes="(max-width: 479px) 258px, (max-width: 767px) 418px, (max-width: 1439px) 450px, (max-width: 3000px) 370px"
            alt="Photo barbers"
            className={styles.img}
          />
        </div>
        <div className={styles.descrWrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.descr}>{subtitle}</p>
            <Social instagramURL={instagramURL} twitterURL={twitterURL} facebookURL={facebookURL} linkInURL={linkInURL}/>
        </div>
    </section>
  )
}

export default CardItem;