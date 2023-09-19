import Link from "next/link";

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import styles from "@/components/Social/Social.module.css";

const Social = ( { instagramURL, twitterURL, facebookURL, linkInURL } ) => {
  return (
    <ul className={styles.list}>
        <li>
            <Link
                className={styles.link}
                href={instagramURL}
                target="_blank"
                aria-label="Icon Instagram"
            >
                <InstagramIcon/>                
            </Link>
        </li>
        <li>
            <Link
                className={styles.link}
                href={twitterURL}
                target="_blank"
                aria-label="Icon Twitter"
            >
                <TwitterIcon/>                
            </Link>
        </li>
        <li>
            <Link
                className={styles.link}
                href={facebookURL}
                target="_blank"
                aria-label="Icon Facebook"
            >
                <FacebookIcon/>               
            </Link> 
        </li>
        <li>
            <Link
                className={styles.link}
                href={linkInURL}
                target="_blank"
                aria-label="Icon linkedIn"
            >
                <LinkedInIcon />                
            </Link>
        </li>
    </ul>
  )
}

export default Social;