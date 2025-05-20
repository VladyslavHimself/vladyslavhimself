import styles from '@/styles/pages/contacts.module.scss';
import Input from "@/ui/Input/Input";
import Button from "@/ui/Button/Button";
import SendEmailIcon from "@/icons/SendEmailIcon";
import PhoneIcon from "@/icons/PhoneIcon";

export default function ContactsPage() {
    return (
        <div className={styles["contacts-page"]}>
            <div className={styles["contacts-form"]}>
               <div>
                   <div className={styles["contacts-title"]}>Share your ideas</div>
                   <form>
                       <Input placeholder="Fullname" />
                       <Input placeholder="Email" />
                       <textarea placeholder="Your proposition (optional)" />
                       <Button size="medium" type="primary">Send</Button>
                   </form>
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