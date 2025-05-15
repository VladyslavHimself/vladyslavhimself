'use client';

import styles from '@/styles/pages/aboutMe.module.scss'
import React from "react";
import AboutMeExperienceDesktopView
    from "@/components/AboutMeSections/AboutMeExperience/AboutMeExperienceDesktopView/AboutMeExperienceDesktopView";
import useMediaQuery from "@/hooks/useMediaQuery";
import AboutMeMyselfDescription from "@/components/AboutMeSections/AboutMeMyselfDescription";
import AboutMeStrengthsSection from "@/components/AboutMeSections/AboutMeStrengthsSection/AboutMeStrengthsSection";
import AboutMeExperienceMobileView
    from "@/components/AboutMeSections/AboutMeExperience/AboutMeExperienceMobileView/AboutMeExperienceMobileView";


export default function AboutMePage() {
    const isDesktopConstraints = useMediaQuery('(min-width: 1048px)');

    return (
        <div className={styles['about-me-page']} style={{
            flexDirection: isDesktopConstraints ? 'row' : 'column',
        }}>
            <div className={styles["about-me-description"]}>
                <div className={styles["about-me-description-general"]}>
                    <AboutMeMyselfDescription/>
                </div>
                <div className={styles["about-me-description-general"]} style={{marginTop: '20px'}}>
                    <AboutMeStrengthsSection />
                </div>
            </div>


            {isDesktopConstraints && <AboutMeExperienceDesktopView/>}
            {!isDesktopConstraints && <AboutMeExperienceMobileView />}
        </div>
    );
};