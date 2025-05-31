import styles from '@/styles/pages/projectsEntity.module.scss';
import React from "react";
import ProjectsEntityMainSectionDescription
    from "@/components/ProjectsEntity/ProjectsEntityMainSectionDescription/ProjectsEntityMainSectionDescription";
import {cElevenProjectEntity} from "@/constants/showcases.constants";
import ProjectsEntityAdditionalSectionDescription
    from "@/components/ProjectsEntity/ProjectsEntityAdditionalSectionDescription/ProjectsEntityAdditionalSectionDescription";
import CEleven from "@/components/bentoPages/CEleven/CEleven";

export default function CElevenProjectPage() {
    return (
        <div className={styles['projects-entity-page']}>
            <CEleven />
            <div className={styles["projects-entity-page-info"]}>
                <ProjectsEntityMainSectionDescription projectEntity={cElevenProjectEntity} />
                <ProjectsEntityAdditionalSectionDescription projectEntity={cElevenProjectEntity} />
            </div>
        </div>
    );
};