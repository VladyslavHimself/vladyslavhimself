'use client';

import Link from "next/link";
import styles from './navbarLinks.module.scss';
import {usePathname} from "next/navigation";

const navigationPathes = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/about-me',
        label: 'About me'
    },
    {
        path: '/projects',
        label: 'Projects'
    },
    {
        path: '/contacts',
        label: 'Contacts'
    }
]

export default function NavbarLinks() {
    const pathname = usePathname();
    return navigationPathes.map(({path, label}) => (
        <li className={isCurrentPath(path, label) ? styles['navbar-links-is-active'] : ""} key={path}>
            <Link href={path}>{label}</Link>
        </li>
    ))

    function isCurrentPath(path: string, label: string) {
        return label === "Home" ? pathname.length === 1 : pathname.includes(path);
    }
};