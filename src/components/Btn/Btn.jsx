import styles from "@/components/Btn/Btn.module.css"

const Btn = ({type, text, styleName}) => {
  
  return (
    <button type={type} className={styles[styleName] || styles.styleName}>{text}</button>
  )
}

export default Btn;



