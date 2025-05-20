import React from "react";
import styles from './input.module.scss';


const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ ...props }) => {
    return <>
        <input {...props} className={styles['input']} type="text"/>
    </>
})

export default Input;

Input.displayName = 'Input'