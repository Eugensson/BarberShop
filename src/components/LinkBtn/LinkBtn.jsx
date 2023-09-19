import Link from "next/link";

import styles from "@/components/LinkBtn/LinkBtn.module.css";

const LinkBtn = ({text, styleName}) => {
  return (
    <Link href="/" className={styles[styleName] || styles.styleName}>{text}</Link>
  )
}

export default LinkBtn;