import styles from "@/components/Form/Form.module.css"

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic"],
  variable: "--font-raleway",
  weight: ["700"],
});

const Form = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={`${raleway.className} ${styles.title}`}>Online-booking</h2>
      <form></form>
    </section>    
  )
}

export default Form;