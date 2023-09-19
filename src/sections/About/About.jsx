import LinkBtn from "@/components/LinkBtn/LinkBtn";

import styles from "@/sections/About/About.module.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic"],
  variable: "--font-raleway",
  weight: ["700"],
});

const About = () => {
  return (
    <section className={styles.wrapper}>
        <h4>About</h4>        
        <h3 className={raleway.className}>Best Barbershop<br/>in your city</h3>
        <p>If you want to add more confidence to your image, you should visit us</p>
        <p>We are a team that never stops at what has been achieved and are thirsty for changes. And when you fall into the hands of our master, you will never be the same again. We are a team that is always &quot;on the same wave&quot; with clients. Therefore, we are always ready to improve everyone who comes to us!</p>
        <LinkBtn text="Online-booking" styleName="secondaryLinkBtn" />
    </section>
  )
}

export default About;