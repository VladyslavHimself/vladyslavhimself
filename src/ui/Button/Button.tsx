import React, {PropsWithChildren} from "react";
import styles from './button.module.scss';

type Props = PropsWithChildren<{
    size: 'small' | 'medium' | 'large',
    type: 'primary' | 'secondary'
}>;

const Button = React.forwardRef<HTMLButtonElement, Props>(({ children, type, size, ...props}) => {
    return <button className={styles.button} data-size={size} data-type={type} {...props}>{children}</button>;
});

Button.displayName = "Button";

export default Button;