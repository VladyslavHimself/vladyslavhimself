import styles from './projectsEntityAdditionalSectionDescription.module.scss';
import React from "react";
import {ProjectEntity} from "@/constants/showcases.constants";
import Image from "next/image";
import Button from "@/ui/Button/Button";

type Props = {
    projectEntity: ProjectEntity;
}

export default function ProjectsEntityAdditionalSectionDescription({projectEntity}: Props) {

    return (
        <div className={styles["projects-entity-page-info-additional-section"]}>
            <div className={styles["projects-entity-page-info-additional-section-title"]}>
                Technologies
            </div>
            <div className={styles["projects-entity-page-info-additional-section-stack"]}>
                {
                    projectEntity.techStack.map((tech) => (
                        <Image alt={tech.name} src={tech.img} width={tech.width} height={tech.height}
                               key={tech.name}/>
                    ))
                }
            </div>
            <Button size='medium' type='primary'>Explore source</Button>
        </div>
    )
};