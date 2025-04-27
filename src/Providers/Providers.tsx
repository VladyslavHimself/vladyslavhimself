'use client';
import NavbarProvider from "@/components/Navbar/NavbarProvider/NavbarProvider";
import React from "react";

export default function Providers({ children }: React.PropsWithChildren) {
    return (
       <NavbarProvider>
           { children }
       </NavbarProvider>
    );
};