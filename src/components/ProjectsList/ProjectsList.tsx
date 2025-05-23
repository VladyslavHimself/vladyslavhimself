'use client';

import React from 'react';
import styles from "@/styles/pages/projects.module.scss";
import {showcases} from "@/constants/showcases.constants";
import Link from "next/link";
import ProjectsListItem from "@/components/ProjectsListItem/ProjectsListItem";
import useMediaQuery from "@/hooks/useMediaQuery";
import ProjectListItemMobile from "@/components/ProjectsListItem/ProjectListItemMobile/ProjectListItemMobile";

export default function ProjectsList() {
    const isDesktopConstraints = useMediaQuery('(min-width: 850px)');

    const ProjectListItemComponent = isDesktopConstraints ? ProjectsListItem : ProjectListItemMobile;
    const projectListClasses = isDesktopConstraints ? styles['project-list-items-bg'] : styles['project-list-items-mobile-bg'];

    return (
        <div className={styles["projects-list"]}>
            {
                showcases.map(({title, description, shortDescription, link}) => (
                    <Link key={title} href={link} passHref>
                        <ProjectListItemComponent title={title}
                                                  description={isDesktopConstraints ? description : shortDescription}
                                                  link={link}
                                                  contentClasses={projectListClasses}
                        />
                    </Link>
                ))
            }
        </div>
    );
};