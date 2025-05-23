import styles from './projectsListItem.module.scss';
import React from "react";
import {ProjectListItemTypes} from "@/components/ProjectsListItem/projectListItem.types";

export default function ProjectsListItem({title, description, contentClasses}: ProjectListItemTypes) {
    return (
        <div className={styles["projects-list-item"]}>
            <div className={`${styles[`projects-list-item-content`]} ${contentClasses}`}>
                <div className={styles["projects-list-item-title"]}>
                    <h2>{title}</h2>
                </div>
                <div className={styles["projects-list-item-description"]}>
                    {description}
                </div>
            </div>
        </div>
    );
};