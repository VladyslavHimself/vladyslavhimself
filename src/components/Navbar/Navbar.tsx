import Link from "next/link";
import styles from './navbar.module.scss';
import {GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, TELEGRAM_URL} from "@/constants/socialLinks.constants";
import GithubIcon from "@/icons/GithubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import TelegramIcon from "@/icons/TelegramIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import BurgerButton from "@/components/Navbar/BurgerButton/BurgerButton";
import NavbarLinks from "@/components/Navbar/NavbarLinks/NavbarLinks";

export default function Navbar() {
    return (
        <div className={styles['navbar']}>
          <ul className={styles['navbar-navigation-list']}>
              <li className={styles["navbar-burger"]}>
                  <BurgerButton />
              </li>
              <NavbarLinks />
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