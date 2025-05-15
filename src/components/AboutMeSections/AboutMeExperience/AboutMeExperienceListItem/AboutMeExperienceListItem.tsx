import styles from './aboutMeExperienceListItem.module.scss';
import MicroStarIcon from "@/icons/MicroStarIcon";
import React from "react";

type Props = {
    title: string,
    description?: string,
};

export default function AboutMeExperienceListItem({title, description}: Props) {
    return (
        <div className={styles["about-me-experience-list-item"]}>
            <div className={styles["about-me-experience-list-item-header"]}>
                <span>{title}</span>
                <MicroStarIcon/>
            </div>
            {
                description && (
                    <div className={styles["about-me-experience-list-item-text"]}>
                        {description}
                    </div>
                )
            }
        </div>
    );
};