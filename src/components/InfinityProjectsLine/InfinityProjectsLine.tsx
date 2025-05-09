'use client';

import styles from './infinityProjectsLine.module.scss'
import {Project} from "@/components/InfinityProjectsLine/infinityProjectsLine.types";
import React from "react";
import useProjectTextMeasurement from "@/components/InfinityProjectsLine/useProjectTextMeasurement";
import useFluidFont from "@/components/InfinityProjectsLine/useFluidFont";

const projects: Project[] = [
    {
        id: 'metamorphosa',
        name: 'Metamorphosa',
        link: '/metamorphosa',
    },

    {
        id: 'c11',
        name: 'Wallpaper center (c11)',
        link: '/c11',
    },

    {
        id: 'hangulTyper',
        name: 'Hangul-Typer',
        link: '/hangul-typer',
    },

    {
        id: 'sonsenimLms',
        name: 'Sonsenim-LMS',
        link: '/sonsenim-lms',
    }
]



export default function InfinityProjectsLine() {
    const fluidFont = useFluidFont({ minSize: 34, maxSize: 72 });
    const text = projects.map(project => project.name).join(" ").toUpperCase();
    const calculatedLineWidth = useProjectTextMeasurement(text, `800 ${fluidFont}px Futura`);



    const lineSetting = React.useMemo(() => ({
        '--ipl-width': `${calculatedLineWidth}px`,
        '--ipl-height': `${fluidFont}px`,
        '--ipl-quantity': projects.length,
    }), [calculatedLineWidth, fluidFont]);

    return (
        <div className={styles['infinity-projects-line']} style={lineSetting as React.CSSProperties}>
            <div className={styles["infinity-projects-line-list"]}>
                {
                    projects.map((project, idx) => (
                        <div style={{ '--ipli-index': idx + 1 } as React.CSSProperties} key={project.id} className={styles['infinity-projects-line-list-item-container']}>
                            <div className={styles['infinity-projects-line-item']}>{project.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};