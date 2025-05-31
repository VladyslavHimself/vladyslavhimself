'use client';

import styles from '@/styles/pages/projectsEntity.module.scss';
import React from "react";
import {cElevenProjectEntity} from "@/constants/showcases.constants";
import CEleven from "@/components/bentoPages/CEleven/CEleven";
import ProjectsEntityPageInfo from "@/components/ProjectsEntity/ProjectsEntityPageInfo/ProjectsEntityPageInfo";

export default function CElevenProjectPage() {

    return (
        <div className={styles['projects-entity-page']}>
            <CEleven />
            <ProjectsEntityPageInfo projectEntity={cElevenProjectEntity} />
        </div>
    );
};