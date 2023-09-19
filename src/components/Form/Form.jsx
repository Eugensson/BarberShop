import TextField from '@mui/material/TextField';
import Btn from '@/components/Btn/Btn';

import styles from "@/components/Form/Form.module.css";
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
      <form className={styles.formWrapper}>
        <TextField fullWidth id="Name" label="Name" variant="standard" required />
        <TextField fullWidth id="Phone" label="Phone" variant="standard" required />
        <TextField fullWidth id="Message" label="Message" variant="standard" />
        <Btn type="submit" text="Send" styleName="primaryBtn"/>s
      </form>
    </section>    
  )
}

export default Form;