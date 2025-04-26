import styles from '@/styles/pages/homepage.module.scss';
import Navbar from "@/components/Navbar/Navbar";

export default function HomePage() {
  return (
    <div className={styles['homepage']}>
        <Navbar />
    </div>
  );
}
