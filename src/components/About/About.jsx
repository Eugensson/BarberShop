import styles from "@/components/About/About.module.css";
import LinkBtn from "@/components/LinkBtn/LinkBtn";

const About = () => {
  return (
    <section className={styles.wrapper}>
        <h3 className={styles.subTitle}>About</h3>        
        <p className={styles.largeText}>Best Barbershop in your city</p>
        <p className={styles.mediumText}>If you want to add more confidence to your image, you should visit us</p>
        <p className={styles.text}>We are a team that never stops at what has been achieved and are thirsty for changes. And when you fall into the hands of our master, you will never be the same again. We are a team that is always &quot;on the same wave&quot; with clients. Therefore, we are always ready to improve everyone who comes to us!</p>
        <LinkBtn text="Online-booking" styleName="secondaryLinkBtn" />
    </section>
  )
}

export default About;