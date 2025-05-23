import styles from '@/styles/pages/projects.module.scss';
import ProjectsList from "@/components/ProjectsList/ProjectsList";


export default function ProjectsPage() {
    return (
        <div className={styles['projects-page']}>
            <div className={styles["projects-left-section"]}>
                <div className={styles["projects-title"]}>
                    <h1>My personal projects, that i would like to share</h1>
                </div>

                <div className={styles["projects-description"]}>
                    Some of my projects are in private repositories. So if you want to see my code - please contact with
                    me. I would be great to share it with you!
                </div>
            </div>


            <div className={styles["projects-right-section"]}>
                <ProjectsList />
            </div>
        </div>
    );
};