'use client';

import {useNavbarActions, useNavbarState} from "@/components/Navbar/NavbarProvider/NavbarProvider";
import styles from './navbarMenuContainer.module.scss';
import MercuryBackground from "@/components/MercuryBackground/MercuryBackground";
import Link from "next/link";
import {PropsWithChildren} from "react";


export default function NavbarMenuContainer() {
    const { isBurgerMenuOpen } = useNavbarState();
    if (!isBurgerMenuOpen) return null;

    return (
        <div className={styles['navbar-menu-container']}>
           <MercuryBackground />

            <div className={styles["navbar-menu-overlay"]}>
                <div className={styles['navbar-menu-list']}>
                    <ul>
                        <NavbarMenuContainer.BurgerLink href={"/"}>Home</NavbarMenuContainer.BurgerLink>
                        <NavbarMenuContainer.BurgerLink href={"/about-me"}>About me</NavbarMenuContainer.BurgerLink>
                        <NavbarMenuContainer.BurgerLink href={"/projects"}>Projects</NavbarMenuContainer.BurgerLink>
                        <NavbarMenuContainer.BurgerLink href={"/contacts"}>Contacts</NavbarMenuContainer.BurgerLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

NavbarMenuContainer.BurgerLink = function BurgerLink({ children, href }: PropsWithChildren<{ href: string }>) {
    const { setIsBurgerMenuOpen } = useNavbarActions();

    return (
        <li>
            <Link href={href} onClick={() => setIsBurgerMenuOpen(false)}>
                {children}
            </Link>
        </li>
    );
};