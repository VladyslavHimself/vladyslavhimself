import styles from './decorativeLayout.module.scss';
import DottedCube from "@/components/DottedCube/DottedCube";

export default function DecorativeLayout() {
    return (
        <div className={styles["decorative-layout"]}>
           <DottedCube />
           <div className={styles['decorative-layout-bunch']}>
               <DottedCube />
               <DottedCube />
               <DottedCube />
               <DottedCube />
           </div>
        </div>
    );
};