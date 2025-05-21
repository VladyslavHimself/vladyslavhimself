import styles from "./contactsConfirmationModal.module.scss";
import {createPortal} from "react-dom";
import Button from "@/ui/Button/Button";

type Props = {
    isOpen: boolean,
    onResetHandler: () => void,

}

export default function ContactsConfirmationModal({ isOpen, onResetHandler }: Props) {
    if (!isOpen) return null;

    return createPortal(<div className={styles["contacts-confirmation-modal-container"]}>
        <div className={styles["contacts-confirmation-modal-box"]}>
           <div>
               <h1>Thank You!</h1>
               <p>I will review Your proposal promptly and respond accordingly!</p>
           </div>

            <Button style={{ width: '100%'}} onClick={onResetHandler} size='medium' type="secondary">Go back</Button>
        </div>
    </div>, document.body)
};