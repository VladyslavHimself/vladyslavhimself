import styles from './sonsenimLms.module.scss';
import MiniHome from "../../../../public/sonsenimAssets/MiniHome";
import Category from "../../../../public/sonsenimAssets/Category";
import Logout from "../../../../public/sonsenimAssets/Logout";
import Settings from "../../../../public/sonsenimAssets/Settings";
import ArrowLeft from "../../../../public/sonsenimAssets/ArrowLeft";
import Switcher from "../../../../public/sonsenimAssets/Switcher";
import Image from "next/image";
import AvatarImage from '../../../assets/avatar.png';
import ArrowDown from '../../../assets/arrowDown.png';
import InfoSquare from '../../../assets/info.png';
import WeeklyReport from "../../../assets/weeklyReport.png";

export default function SonsenimLms() {
    return (
        <div className={styles['sonsenim-lms-bento-page']}>
            <div className={styles["sonsenim-navigation"]}>
                <div className={styles["sonsenim-logo"]}/>
                <div className={styles["sonsenim-navigation-list"]}>
                    <div>
                        <div className={styles["sonsenim-navigation-item"]}>
                            <MiniHome/>
                            Dashboard
                        </div>
                        <div className={styles["sonsenim-navigation-item"]}>
                            <Category/>
                            Groups
                        </div>
                    </div>

                    <div>
                        <div className={styles["sonsenim-navigation-item"]}>
                            <ArrowLeft/>
                            Hide panel
                        </div>
                        <div className={styles["sonsenim-navigation-item"]}>
                            <Settings/>
                            Settings
                        </div>
                        <div className={styles["sonsenim-navigation-item"]}>
                            <Logout/>
                            Log out
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles["sonsenim-wrapper"]}>
                <div className={styles["sonsenim-header-container"]}>
                    <div className={styles["sonsenim-header-select"]}>
                        Korean
                        <Switcher/>
                    </div>

                    <div className={styles["sonsenim-header-profile"]}>
                        <div className={styles["sonsenim-header-profile-name"]}>
                            tokyoshuffle
                            <Image width={15} height={15} src={AvatarImage} alt={""} />
                            <Image width={7} height={7} src={ArrowDown} alt={""} />
                        </div>
                    </div>
                </div>
                <div className={styles["sonsenim-decks-container"]}>
                    <div className={styles["sonsenim-decks-item"]}>
                        <div className={styles["sonsenim-decks-item-counter"]}>3</div>
                        <div className={styles["sonsenim-decks-item-title"]}>Decks created</div>
                    </div>

                    <div className={styles["sonsenim-decks-item"]}>
                        <div className={styles["sonsenim-decks-item-counter"]}>404</div>
                        <div className={styles["sonsenim-decks-item-title"]}>Cards studied</div>
                    </div>
                </div>
                <div className={styles["sonsenim-weekly-report"]}>
                    <div className={styles["weekly-report-title"]}>
                        Weekly report
                        <Image src={InfoSquare} alt={"info square"} width={7} height={7} />
                    </div>
                    <Image src={WeeklyReport} alt={"weekly report"} width={400} height={140} />
                </div>
            </div>
        </div>
    );
};