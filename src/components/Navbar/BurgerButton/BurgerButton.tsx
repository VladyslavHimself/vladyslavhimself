'use client';

import React from 'react';
import BurgerIcon from "@/icons/BurgerIcon";
import { useNavbarActions } from "@/components/Navbar/NavbarProvider/NavbarProvider";

export default function BurgerButton() {
    const { setIsBurgerMenuOpen } = useNavbarActions();

    return (
        <div onClick={onOpenMenuHandler}>
            <BurgerIcon />
        </div>
    );

    function onOpenMenuHandler() {
        setIsBurgerMenuOpen(prevState => !prevState);
    }
};