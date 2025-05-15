import {Canvas} from "@react-three/fiber";
import styles from './aboutMeExperienceDesktopView.module.scss';
import MercurianShader from "@/components/MercuryBackground/MercurianShader";
import React from "react";
import {experienceMetadata} from "@/components/AboutMeSections/AboutMeExperience/experienceMetadata.constants";
import AboutMeExperienceListItem
    from "@/components/AboutMeSections/AboutMeExperience/AboutMeExperienceListItem/AboutMeExperienceListItem";

export default function AboutMeExperienceDesktopView() {
    return (
        <div className={styles["about-me-experience"]}>
            <div className={styles["about-me-experience-mercurian-background"]}>
                <div className={styles["about-me-experience-mercurian-background-container"]}/>
                <Canvas camera={{position: [0, 0, 1], fov: 90}}>
                    <MercurianShader/>
                </Canvas>
            </div>

            <div className={styles["about-me-experience-header"]}>Experience</div>
            <div className={styles["about-me-experience-list"]}>
                {
                    experienceMetadata.map(({ title, description })=> (
                       <AboutMeExperienceListItem key={title} title={title} description={description} />
                    ))
                }
            </div>
        </div>
    );
};