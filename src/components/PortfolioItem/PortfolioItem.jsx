import Image from "next/image";

import styles from "@/components/PortfolioItem/PortfolioItem.module.css";

const PortfolioItem = ({imageUrl}) => {
  return (
    <div className={styles.imgThumb}>
      <Image
        priority
        src={imageUrl}
        fill
        sizes="(max-width: 479px) 258px, (max-width: 767px) 360px, (max-width: 1439px) 350px, (max-width: 3000px) 270px"
        alt="Photo barbers working"
        className={styles.img}
      />
    </div>    
  )
}

export default PortfolioItem;