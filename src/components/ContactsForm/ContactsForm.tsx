'use client';

import Input from "@/ui/Input/Input";
import Button from "@/ui/Button/Button";
import {useForm} from "@formspree/react";
import ContactsConfirmationModal from "@/components/ContactsConfirmationModal/ContactsConfirmationModal";
import React from "react";

export default function ContactsForm() {
    const [ state, handleSubmit, reset ] = useForm("xdkgbqra"); // TODO: Add to .env

    return (
        <form onSubmit={(e) => {
            handleSubmit(e);
            e.target.reset()
        }}>
            <Input name="fullname" type="text" placeholder="Fullname"/>
            <Input name="email" type="email" placeholder="Email"/>
            <textarea name="proposal" placeholder="Your proposition (optional)"/>
            <Button size="medium" type="primary">Send</Button>
            <ContactsConfirmationModal isOpen={state.succeeded} onResetHandler={reset} />
        </form>
    );
};