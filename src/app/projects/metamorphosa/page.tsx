import styles from '@/styles/pages/projectsEntity.module.scss';
import ProjectsEntityMainSectionDescription
    from "@/components/ProjectsEntity/ProjectsEntityMainSectionDescription/ProjectsEntityMainSectionDescription";
import {metamorphosaProjectEntity } from "@/constants/showcases.constants";
import ProjectsEntityAdditionalSectionDescription
    from "@/components/ProjectsEntity/ProjectsEntityAdditionalSectionDescription/ProjectsEntityAdditionalSectionDescription";

import MetamorphosaMockedImage from '@/../public/metamorphosa-mocked.png';
import Image from "next/image";

export default function MetamorphosaProjectPage() {
    return (
        <div className={`${styles['projects-entity-page']} ${styles['is-horizontal']}`}>
            <div className={styles['projects-entity-page-info-column']}>
                <ProjectsEntityMainSectionDescription projectEntity={metamorphosaProjectEntity}/>
                <ProjectsEntityAdditionalSectionDescription projectEntity={metamorphosaProjectEntity} orientation='right' />
            </div>
            <div>
                <Image src={MetamorphosaMockedImage} alt={'Metamorphosa'} width={314} height={664} />
            </div>
        </div>
    );
};