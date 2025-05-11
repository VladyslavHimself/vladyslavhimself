'use client';

import React from 'react';


type NavbarState = {
    isBurgerMenuOpen: boolean;
}

type NavbarActions = {
    setIsBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarStateContext = React.createContext<null|NavbarState>(null);
const NavbarActionsContext= React.createContext<null|NavbarActions>(null);

export default function NavbarProvider({ children }: React.PropsWithChildren) {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState<boolean>(false);

    return (
        <NavbarStateContext value={{ isBurgerMenuOpen }}>
            <NavbarActionsContext value={{ setIsBurgerMenuOpen }}>
                { children }
            </NavbarActionsContext>
        </NavbarStateContext>
    );
};

export function useNavbarState() {
    const context = React.useContext(NavbarStateContext);
    if (context === undefined) throw new Error('useNavbarState must be used within a NavbarProvider');

    return context as NavbarState;
}

export function useNavbarActions() {
    const context = React.useContext(NavbarActionsContext);
    if (context === undefined) throw new Error('useNavbarActions must be used within a NavbarProvider')

    return context as NavbarActions;
}