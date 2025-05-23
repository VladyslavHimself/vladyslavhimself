import styles from './projectListItemMobile.module.scss';

import {ProjectListItemTypes} from "@/components/ProjectsListItem/projectListItem.types";
import React from "react";

export default function ProjectListItemMobile({title, description, contentClasses}: ProjectListItemTypes) {
    return (
        <div className={`${styles[`project-list-item-mobile`]} ${contentClasses}`}>
            <div className={styles["projects-list-item-title"]}>
                <h2>{title}</h2>
            </div>
            <div className={styles["projects-list-item-description"]}>
                {description}
            </div>
        </div>
    );
};