'use client';

import {useNavbarState} from "@/components/Navbar/NavbarProvider/NavbarProvider";
import styles from './navbarMenuContainer.module.scss';


export default function NavbarMenuContainer() {
    const { isBurgerMenuOpen } = useNavbarState();


    if (!isBurgerMenuOpen) return null;

    return (
        <div className={styles['navbar-menu-container']}>
            xxx
        </div>
    );
};