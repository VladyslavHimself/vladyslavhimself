'use client';

import styles from '@/styles/pages/aboutMe.module.scss'
import {useNavbarState} from "@/components/Navbar/NavbarProvider/NavbarProvider";
import MercurianShader from "@/components/MercuryBackground/MercurianShader";
import {Canvas} from "@react-three/fiber";
import React from "react";
import HeartIcon from "@/icons/HeartIcon";
import AboutMeStrengthItem from "@/components/AboutMeStrengthItem/AboutMeStrengthItem";
import TribuneIcon from "@/icons/TribuneIcon";
import SocietyIcon from "@/icons/SocietyIcon";


export default function AboutMePage() {
    const navbar = useNavbarState();
    console.log(navbar);

    return (
        <div className={styles['about-me-page']}>
            <div className={styles["about-me-description"]}>
                <div className={styles["about-me-description-general"]}>
                    <div className={styles["about-me-description-general"]}>
                        <div className={styles["about-me-description-general-header"]}>Nice to meet you!</div>
                        <p>
                            I am a highly skilled frontend developer with over 3 years of commercial experience in
                            building
                            high-performance, user-centric applications, with a particular focus on the healthcare
                            domain.
                            <br/><br/>
                            My expertise includes React.js, Next.js, JavaScript/TypeScript, responsive design, and
                            HTML/CSS.
                            I excel at analyzing and translating business requirements into intuitive, scalable, and
                            visually appealing user interfaces.
                            <br/><br/>
                            I am experienced in Agile methodologies, including Scrum and Kanban, and thrive in
                            collaborative
                            team environments to deliver eﬃcient, high-quality solutions.
                        </p>
                    </div>

                    <div className={styles["about-me-description-general"]} style={{marginTop: '20px'}}>
                        <div className={styles["about-me-description-general-header"]}>My strengths</div>
                        <div className={styles["about-me-description-general-strengths-container"]}>
                            <AboutMeStrengthItem Icon={HeartIcon}
                                                 text="I have 3 years programming experience in Medicare domain"/>
                            <AboutMeStrengthItem Icon={TribuneIcon}
                                                 text="I have experience in public speaking related to front-end community in companies."/>
                            <AboutMeStrengthItem Icon={SocietyIcon}
                                                 text="I worked in different teams on different projects and found the best ways to communicate and be productive."/>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["about-me-experience"]}>
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