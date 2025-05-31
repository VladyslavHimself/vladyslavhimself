import styles from './cEleven.module.scss'
import Image from "next/image";

import UserProfileIcon from '../../../../public/cElevenAssets/userProfileIcon.png';
import NavHomeIcon from '../../../../public/cElevenAssets/navHome.png';
import NavAddNewIcon from '../../../../public/cElevenAssets/navAddNew.png';
import NavGalleryIcon from '../../../../public/cElevenAssets/navGallery.png';
import NavFavouritesIcon from '../../../../public/cElevenAssets/navFavourites.png';
import SearchIcon from '../../../../public/cElevenAssets/searchIcon.png';
import CElevenLogo from '../../../../public/cElevenAssets/cElevenLogo.png';

import CarouselImage1 from '../../../../public/cElevenAssets/popularImages/first.png'
import CarouselImage2 from '../../../../public/cElevenAssets/popularImages/second.png'
import CarouselImage3 from '../../../../public/cElevenAssets/popularImages/third.png'
import CarouselImage4 from '../../../../public/cElevenAssets/popularImages/fourth.png'

import TopicImage1 from '../../../../public/cElevenAssets/popularTopics/first.png'
import TopicImage2 from '../../../../public/cElevenAssets/popularTopics/second.png'
import TopicImage3 from '../../../../public/cElevenAssets/popularTopics/third.png'
import TopicImage4 from '../../../../public/cElevenAssets/popularTopics/fourth.png'
import PlayIcon from '../../../../public/cElevenAssets/playIcon.png'


export default function CEleven() {
    return (
        <div className={styles['c-eleven-bento-page']}>
            <div className={styles["c-eleven-sidebar"]}>
               <div className={styles["c-eleven-profile"]}>
                   <div className={styles["c-eleven-user-avatar"]}>
                       <Image src={UserProfileIcon} alt={'user profile'} width={15} height={15} />
                   </div>
                   <div className={styles["c-eleven-user-info"]}>
                       Vladyslav Lutchyn
                   </div>
               </div>
                <div className={styles["c-eleven-navigation"]}>
                    <div className={`${styles["c-eleven-navigation-item"]} ${styles["is-active"]}`}>
                        <Image src={NavHomeIcon} alt={'home'} width={7} height={7} />
                        Home
                    </div>

                    <div className={styles["c-eleven-navigation-item"]}>
                        <Image src={NavAddNewIcon} alt={'add new'} width={7} height={7} />
                        Add new
                    </div>

                    <div className={styles["c-eleven-navigation-item"]}>
                        <Image src={NavGalleryIcon} alt={'gallery'} width={7} height={7} />
                        Gallery
                    </div>

                    <div className={styles["c-eleven-navigation-item"]}>
                        <Image src={NavFavouritesIcon} alt={'favourites'} width={7} height={7} />
                        Favourites
                    </div>

                    <div className={styles["c-eleven-navigation-item"]}>
                        <Image src={NavAddNewIcon} alt={'subscriptions'} width={7} height={7} />
                        Subscriptions
                    </div>
                </div>
                <div className={styles["c-eleven-logo"]}>
                    <Image src={CElevenLogo} alt={"Logo"} width={44} height={23} />
                </div>
            </div>
            <div className={styles["c-eleven-content"]}>
                <div className={styles["c-eleven-header"]}>
                    <div className={styles["c-eleven-searchbar"]}>
                        <Image src={SearchIcon} alt={"search"} width={9} height={9} />
                        Start searching...
                    </div>
                    <div className={styles["c-eleven-search-button"]}>Search</div>
                </div>
                <div className={styles["c-eleven-section"]}>
                    <div className={styles["c-eleven-section-title"]}>Popular</div>
                    <div className={styles["c-eleven-section-images"]}>
                       <Image src={CarouselImage1} alt={'carousel image 1'} height={74} width={130} />
                       <Image src={CarouselImage2} className={styles['is-highlighted']} alt={'carousel image 2'} height={74} width={130} />
                       <Image src={CarouselImage3} alt={'carousel image 3'} height={74} width={130} />
                       <Image src={CarouselImage4} alt={'carousel image 4'} height={74} width={130} />
                    </div>
                </div>
                <div className={styles["c-eleven-section"]}>
                  <div className={styles["c-eleven-section-title"]}>Explore popular topics</div>
                    <div className={styles["c-eleven-section-images"]}>
                        <Image src={TopicImage1} alt={'topic image 1'} height={147} width={87} />
                        <Image src={TopicImage2} alt={'topic image 2'} height={147} width={87} />
                        <Image src={TopicImage3} alt={'topic image 3'} height={147} width={87} />
                        <Image src={TopicImage4} className={styles['is-highlighted']} alt={'topic image 4'} height={147} width={87} />
                        <div className={styles["c-eleven-explore-button"]}>
                            <Image src={PlayIcon} alt={'Explore'} height={12} width={12} />
                            Explore more
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};