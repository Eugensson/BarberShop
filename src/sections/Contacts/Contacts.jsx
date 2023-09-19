import Link from "next/link";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Form from "@/components/Form/Form";

import styles from "@/sections/Contacts/Contacts.module.css";
import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ["cyrillic"],
  variable: "--font-raleway",
  weight: ["700"],
});

const Contacts = () => {
  return (
    <section className={styles.wrapper}>
          <Form/>
          <div className={styles.infoWrapper}>
            <h2 className={`${raleway.className} ${styles.title}`}>Contacts</h2>
            <ul className={styles.list}>
              <li>
                <p className={styles.link}><LocationOnIcon arial-label="Icon Location" fontSize="small" />st. Vasilkovaya, 7A Kiev, 08132</p>
              </li>
              <li>
                <a className={styles.link} href="tel:+380441111111" arial-label="Icon Phone"><LocalPhoneIcon fontSize="small" />+38 044 111 11 11</a>
              </li>
              <li>
                <Link className={styles.link} href="mailto:barbershop@email.com" arial-label="Icon Mail"><MailOutlineIcon fontSize="small" />barbershop@email.com</Link>
              </li>
            </ul>            
              <h4 className={styles.h4}>Working hours</h4>
              <p className={styles.text}>Every day from 9:00 to 22:00</p>            
          </div>
    </section>
  )
}

export default Contacts;