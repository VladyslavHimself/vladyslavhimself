'use client';

import styles from '@/styles/pages/projectsEntity.module.scss';
import React from "react";
import SonsenimLms from "@/components/bentoPages/SonsenimLms/SonsenimLms";
import {sonsenimLMSProjectEntity} from "@/constants/showcases.constants";
import ProjectsEntityMainSectionDescription
    from "@/components/ProjectsEntity/ProjectsEntityMainSectionDescription/ProjectsEntityMainSectionDescription";
import ProjectsEntityAdditionalSectionDescription
    from "@/components/ProjectsEntity/ProjectsEntityAdditionalSectionDescription/ProjectsEntityAdditionalSectionDescription";


export default function SonsenimProjectPage() {

    return (
        <div className={styles["projects-entity-page"]}>
            <SonsenimLms/>
            <div className={styles["projects-entity-page-info"]}>
                <ProjectsEntityMainSectionDescription projectEntity={sonsenimLMSProjectEntity} />
                <ProjectsEntityAdditionalSectionDescription projectEntity={sonsenimLMSProjectEntity} />
            </div>
        </div>
    );
};