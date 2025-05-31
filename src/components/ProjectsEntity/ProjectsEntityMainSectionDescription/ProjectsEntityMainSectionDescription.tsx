import styles from './projectsEntityMainSectionDescription.module.scss';
import React from "react";
import {ProjectEntity} from "@/constants/showcases.constants";

type Props = {
    projectEntity: ProjectEntity;
}

export default function ProjectsEntityMainSectionDescription({ projectEntity }: Props) {
    const {title, primaryText, secondaryText} = projectEntity;

    return (
        <div className={styles["projects-entity-page-info-main-section"]}>
            <h1 className={styles["project-info-main-section-title"]}>
                {title}
            </h1 >

            <div className={styles["projects-info-main-section-description"]}>
                <p className={styles["projects-info-main-section-description-primary-text"]}>
                    {primaryText}
                </p>

                <p className={styles["projects-info-main-section-secondary-text"]}>
                    {secondaryText}
                </p>
            </div>
        </div>
    );
};