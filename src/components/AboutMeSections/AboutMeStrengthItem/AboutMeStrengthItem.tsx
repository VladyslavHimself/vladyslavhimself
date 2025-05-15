import styles from "@/styles/pages/aboutMe.module.scss";
import React from "react";

type Props = {
    Icon: React.FC,
    text: string
}

export default function AboutMeStrengthItem({ Icon, text }: Props) {
    return (
        <div className={styles["about-me-description-general-strengths-item"]}>
           <Icon />
            <div className={styles["about-me-description-general-strengths-item-text"]}>
                {text}
            </div>
        </div>
    );
};