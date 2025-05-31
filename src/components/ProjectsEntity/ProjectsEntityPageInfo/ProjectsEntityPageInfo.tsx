// @flow
import * as React from 'react';
import useMediaQuery from "@/hooks/useMediaQuery";
import styles from "@/styles/pages/projectsEntity.module.scss";
import ProjectsEntityMainSectionDescription
    from "@/components/ProjectsEntity/ProjectsEntityMainSectionDescription/ProjectsEntityMainSectionDescription";
import {ProjectEntity} from "@/constants/showcases.constants";
import ProjectsEntityAdditionalSectionDescription
    from "@/components/ProjectsEntity/ProjectsEntityAdditionalSectionDescription/ProjectsEntityAdditionalSectionDescription";

type Props = {
    projectEntity: ProjectEntity;
}

export default function ProjectsEntityPageInfo({projectEntity}: Props) {
    const matches = useMediaQuery("(max-width: 670px)")
    return (
        <div className={styles["projects-entity-page-info"]}>
            <ProjectsEntityMainSectionDescription projectEntity={projectEntity}/>
            <ProjectsEntityAdditionalSectionDescription projectEntity={projectEntity}
                                                        orientation={matches ? 'right' : 'left'}/>

        </div>
    );
};