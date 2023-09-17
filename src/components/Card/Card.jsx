import Image from "next/image";

import Social from "@/components/Social/Social";

import styles from  "@/components/Card/Card.module.css";

const Card = ({ imageUrl, title, subtitle, instagramURL, twitterURL, facebookURL, linkInURL }) => {
  return (
    <section className={styles.wrapper}>
        <Image src={imageUrl} alt="Photo barbers" width={418} height={346} />
        <div className={styles.descriptionWrapper}>
            <p className={styles.title}>{title}</p>
            <p className={styles.subTitle}>{subtitle}</p>
            <Social instagramURL={instagramURL} twitterURL={twitterURL} facebookURL={facebookURL} linkInURL={linkInURL}/>
        </div>
    </section>
  )
}

export default Card;