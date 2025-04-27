import Link from "next/link";
import styles from './navbar.module.scss';
import {GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, TELEGRAM_URL} from "@/constants/socialLinks.constants";
import GithubIcon from "@/icons/GithubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import TelegramIcon from "@/icons/TelegramIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import BurgerButton from "@/components/Navbar/BurgerButton/BurgerButton";

export default function Navbar() {
    return (
        <div className={styles['navbar']}>
          <ul className={styles['navbar-navigation-list']}>
              <li className={styles["navbar-burger"]}>
                  <BurgerButton />
              </li>
              <li className={styles['is-active']}><Link href="#">Home</Link></li>
              <li><Link href="#">About me</Link></li>
              <li><Link href="#">Projects</Link></li>
              <li><Link href="#">Contacts</Link></li>
          </ul>

        <ul className={styles["navbar-social-links"]}>
            <li><Link target="_blank" href={LINKEDIN_URL}><LinkedInIcon /></Link></li>
            <li><Link target="_blank" href={GITHUB_URL}><GithubIcon /></Link></li>
            <li><Link target="_blank" href={TELEGRAM_URL}><TelegramIcon /></Link></li>
            <li><Link target="_blank" href={INSTAGRAM_URL}><InstagramIcon /></Link></li>
        </ul>
      </div>
    );
};