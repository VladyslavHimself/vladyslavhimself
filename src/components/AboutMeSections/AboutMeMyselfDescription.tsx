import styles from "@/styles/pages/aboutMe.module.scss";
import React from "react";

export default function AboutMeMyselfDescription() {
    return (
        <>
            <div className={styles["about-me-description-general-header"]}>Nice to meet you!</div>
            <p>
                I am a highly skilled frontend developer with over 3 years of commercial experience in
                building
                high-performance, user-centric applications, with a particular focus on the healthcare
                domain.
                <br/>
                My expertise includes React.js, Next.js, JavaScript/TypeScript, responsive design, and
                HTML/CSS.
                I excel at analyzing and translating business requirements into intuitive, scalable, and
                visually appealing user interfaces.
                <br/>
                I am experienced in Agile methodologies, including Scrum and Kanban, and thrive in
                collaborative
                team environments to deliver eﬃcient, high-quality solutions.
            </p>
        </>
    );
};