'use client';

import styles from '@/styles/pages/projectsEntity.module.scss';
import React from "react";
import SonsenimLms from "@/components/bentoPages/SonsenimLms/SonsenimLms";
import Button from "@/ui/Button/Button";
import Image from "next/image";
import reactLogoIcon from '../../../assets/techIcons/reactLogo.png';
import reactQueryLogo from '../../../assets/techIcons/reactQueryLogo.png';
import javaSpringBootLogo from '../../../assets/techIcons/javaSpringBoot.png';
import postgreSqlLogo from '../../../assets/techIcons/postgreSql.png';

export default function SonsenimProjectPage() {

    return (
        <div className={styles["projects-entity-page"]}>
            <SonsenimLms/>
            <div className={styles["projects-entity-page-info"]}>
                <div className={styles["projects-entity-page-info-main-section"]}>
                    <div className={styles["project-info-main-section-title"]}>
                        Sonsenim-LMS
                    </div>

                    <div className={styles["projects-info-main-section-description"]}>
                        <p className={styles["projects-info-main-section-description-primary-text"]}>
                            “성센님-lms” is a spaced repetition flashcard application designed to help users learn
                            languages or
                            prepare for tests.
                        </p>

                        <p className={styles["projects-info-main-section-secondary-text"]}>
                            In this project, my main focus was to practice my skills in Java Spring Boot
                            framework.<br/> I
                            developed all application from scratch
                        </p>
                    </div>
                </div>
                <div className={styles["projects-entity-page-info-additional-section"]}>
                    <div className={styles["projects-entity-page-info-additional-section-title"]}>
                        Technologies
                    </div>
                    <div className={styles["projects-entity-page-info-additional-section-stack"]}>
                        <Image alt="React" src={reactLogoIcon} width={55} height={55} />
                        <Image alt="React query" src={reactQueryLogo} width={51} height={45} />
                        <Image alt="Spring Boot" src={javaSpringBootLogo} width={47} height={47} />
                        <Image alt="PostgreSql" src={postgreSqlLogo} width={48} height={48} />
                    </div>
                    <Button size='medium' type='primary'>Explore source</Button>
                </div>
            </div>
        </div>
    );
};