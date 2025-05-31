import styles from './projectsEntityAdditionalSectionDescription.module.scss';
import React from "react";
import {ProjectEntity} from "@/constants/showcases.constants";
import Image from "next/image";
import Button from "@/ui/Button/Button";

type Props = {
    projectEntity: ProjectEntity;
    orientation?: 'left' | 'right';
}

export default function ProjectsEntityAdditionalSectionDescription({projectEntity, orientation = 'left'}: Props) {
    return (
        <div className={styles["projects-entity-page-info-additional-section"]}
             style={orientation === 'right' ? {alignItems: 'flex-start', marginTop: 25} : {}}>
            <div className={styles["projects-entity-page-info-additional-section-title"]}>
                Technologies
            </div>
            <div className={styles["projects-entity-page-info-additional-section-stack"]} >
                {
                    projectEntity.techStack.map((tech) => (
                        <Image alt={tech.name} src={tech.img} width={tech.width} height={tech.height}
                               key={tech.name}/>
                    ))
                }
            </div>
            {/*
            @ts-expect-error ts-migrate(2769) */}
            <Button size='medium' type='primary' style={orientation === 'right' ? {alignSelf: 'flex-start'} : {}}>
                Explore source
            </Button>
        </div>
    )
};