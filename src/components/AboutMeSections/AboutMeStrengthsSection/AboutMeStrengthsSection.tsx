import styles from "@/styles/pages/aboutMe.module.scss";
import AboutMeStrengthItem from "@/components/AboutMeSections/AboutMeStrengthItem/AboutMeStrengthItem";
import HeartIcon from "@/icons/HeartIcon";
import TribuneIcon from "@/icons/TribuneIcon";
import SocietyIcon from "@/icons/SocietyIcon";
import React from "react";

export default function AboutMeStrengthsSection() {
    return (
        <>
            <div className={styles["about-me-description-general-header"]}>My strengths</div>
            <div className={styles["about-me-description-general-strengths-container"]}>
                <AboutMeStrengthItem Icon={HeartIcon}
                                     text="I have 3 years programming experience in Medicare domain"/>
                <AboutMeStrengthItem Icon={TribuneIcon}
                                     text="I have experience in public speaking related to front-end community in companies."/>
                <AboutMeStrengthItem Icon={SocietyIcon}
                                     text="I worked in different teams on different projects and found the best ways to communicate and be productive."/>
            </div>
        </>
    );
};