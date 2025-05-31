'use client';

import styles from '@/styles/pages/projectsEntity.module.scss';
import React from "react";
import SonsenimLms from "@/components/bentoPages/SonsenimLms/SonsenimLms";
import {sonsenimLMSProjectEntity} from "@/constants/showcases.constants";
import ProjectsEntityPageInfo from "@/components/ProjectsEntity/ProjectsEntityPageInfo/ProjectsEntityPageInfo";

export default function SonsenimProjectPage() {

    return (
        <div className={styles["projects-entity-page"]}>
            <SonsenimLms/>
            <div className={styles["projects-entity-page-info"]}>
                <ProjectsEntityPageInfo projectEntity={sonsenimLMSProjectEntity} />
            </div>
        </div>
    );
};