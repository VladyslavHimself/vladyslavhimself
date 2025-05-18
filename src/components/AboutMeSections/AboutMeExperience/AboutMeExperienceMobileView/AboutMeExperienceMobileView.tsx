import styles from './aboutMeExperienceMobileView.module.scss';
import ArrowDownIcon from "@/icons/ArrowDownIcon";
import {Canvas} from "@react-three/fiber";
import MercurianShader from "@/components/MercuryBackground/MercurianShader";
import React from "react";
import {experienceMetadata} from "@/components/AboutMeSections/AboutMeExperience/experienceMetadata.constants";
import AboutMeExperienceListItem
    from "@/components/AboutMeSections/AboutMeExperience/AboutMeExperienceListItem/AboutMeExperienceListItem";
import Link from "next/link";

export default function AboutMeExperienceMobileView() {
    return (
        <div className={styles['about-me-experience-mobile-view']}>
            <Link href="#experience" passHref>
                <div className={styles["about-me-experience-mobile-view-title"]}>
                    Experience <ArrowDownIcon/>
                </div>
            </Link>
            <div className={styles["about-me-experience-mobile-view-container"]}>
                <div className={styles["about-me-experience-header"]} id="experience">Experience</div>
                <div className={styles["about-me-experience-list"]}>
                    {
                        experienceMetadata.map(({title, description}) => (
                            <AboutMeExperienceListItem key={title} title={title} description={description}/>
                        ))
                    }
                </div>

                <div className={styles["about-me-experience-mercurian-background"]}>
                    <div className={styles["about-me-experience-mercurian-background-container"]}/>
                    <Canvas camera={{position: [0, 0, 1], fov: 90}}>
                        <MercurianShader/>
                    </Canvas>
                </div>
            </div>
        </div>
    );
};