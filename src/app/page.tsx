import styles from '@/styles/pages/homepage.module.scss';
import React from "react";
import Button from "@/ui/Button/Button";
import ReactLogoIcon from "@/icons/ReactLogoIcon";
import TechStackOrbit from "@/icons/TechStackOrbit";
import DownloadIcon from "@/icons/DownloadIcon";
import InfinityProjectsLine from "@/components/InfinityProjectsLine/InfinityProjectsLine";

// TODO: CONVERT ALL TEXT INTO REM & EM.

export default function HomePage() {
  return (
    <div className={styles['homepage']}>
        <div></div>
        <div className={styles['hero-introduction']}>
            <div className={styles['hero-introduction-description']}>
                <h2>Hi, I&#39;m Vladyslav</h2>
                <h1>Front-end Engineer</h1>
                <Button size='medium' type="primary">
                    <DownloadIcon /> Download CV
                </Button>
            </div>

            <div className={styles['hero-introduction-logo']}>
                <ReactLogoIcon className={styles['hero-introduction-logo-react-icon']} />
                <TechStackOrbit className={styles['hero-introduction-logo-tech-stack-orbit']} />
            </div>
        </div>
        <InfinityProjectsLine />
    </div>
  );
}
