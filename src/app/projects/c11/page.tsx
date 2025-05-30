import styles from '@/styles/pages/projectsEntity.module.scss';
import React from "react";
import ProjectsEntityMainSectionDescription
    from "@/components/ProjectsEntity/ProjectsEntityMainSectionDescription/ProjectsEntityMainSectionDescription";
import {cElevenProjectEntity} from "@/constants/showcases.constants";
import ProjectsEntityAdditionalSectionDescription
    from "@/components/ProjectsEntity/ProjectsEntityAdditionalSectionDescription/ProjectsEntityAdditionalSectionDescription";
import SonsenimLms from "@/components/bentoPages/SonsenimLms/SonsenimLms";

export default function CElevenProjectPage() {
    return (
        <div className={styles['projects-entity-page']}>
            <SonsenimLms />
            <div className={styles["projects-entity-page-info"]}>
                <ProjectsEntityMainSectionDescription projectEntity={cElevenProjectEntity} />
                <ProjectsEntityAdditionalSectionDescription projectEntity={cElevenProjectEntity} />
            </div>
        </div>
    );
};