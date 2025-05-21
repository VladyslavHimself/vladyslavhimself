import styles from '@/styles/pages/contacts.module.scss';
import SendEmailIcon from "@/icons/SendEmailIcon";
import PhoneIcon from "@/icons/PhoneIcon";
import ContactsForm from "@/components/ContactsForm/ContactsForm";

export default function ContactsPage() {

    return (
        <div className={styles["contacts-page"]}>
            <div className={styles["contacts-form"]}>
               <div>
                   <div className={styles["contacts-title"]}>Share your ideas</div>
                   <ContactsForm />
               </div>

                <div className={styles["contacts-links"]}>
                    <div className={styles["contacts-links-item"]}>
                        <div className={styles["contacts-links-item-icon"]}>
                            <SendEmailIcon />
                        </div>
                        <div className={styles["contacts-links-item-text"]}>
                            <a href="mailto:vladyslav.lutchyn@gmail.com">vladyslav.lutchyn@gmail.com</a>
                        </div>
                    </div>

                    <div className={styles["contacts-links-item"]}>
                        <div className={styles["contacts-links-item-icon"]}>
                            <PhoneIcon />
                        </div>
                        <div className={styles["contacts-links-item-text"]}>
                            <a href="tel:+18562787271">+1 (856) 278-7271</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};