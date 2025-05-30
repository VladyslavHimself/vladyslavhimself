import reactLogoIcon from '../assets/techIcons/reactLogo.png';
import reactQueryIcon from '../assets/techIcons/reactQueryLogo.png';
import javaSpringIcon from '../assets/techIcons/javaSpringBoot.png';
import postgreSqlicon from '../assets/techIcons/postgreSql.png';
import {StaticImageData} from "next/image";

export const showcases = [
    {
        title: 'C11',
        description: 'A wallpaper service, where user can upload wallpapers, or explore community to find new one.',
        shortDescription: 'A wallpaper service',
        link: '/projects/c11',
    },
    {
        title: 'SONSENIM-LMS',
        description: 'A spaced repetition flashcard application designed to help users learn languages or prepare for tests.',
        shortDescription: 'A flashcard application',
        link: '/projects/sonsenim',
    },
    {
        title: 'METAMORPHOSA',
        description: 'A mobile sports diary app designed to track and analyze your physical activity.',
        shortDescription: 'A sports diary app',
        link: '/projects/metamorphosa',
    }
]

export type ProjectEntity = {
    title: string,
    primaryText: string,
    secondaryText: string,
    sourceLink: string,
    techStack: techEntity[]
}

type techEntity = {
    name: string,
    img: StaticImageData,
    width: number,
    height: number,
}

export const sonsenimLMSProjectEntity = {
    title: 'Sonsenim-LMS',
    primaryText: '“성센님-lms” is a spaced repetition flashcard application designed to help users learn languages or prepare for tests.',
    secondaryText: 'In this project, my main focus was to practice my skills in Java Spring Boot framework.\n I developed all application from scratch',
    sourceLink: '#',
    techStack: [
        {
            name: 'React',
            img: reactLogoIcon,
            width: 55,
            height: 55,
        },
        {
            name: 'React Query',
            img: reactQueryIcon,
            width: 51,
            height: 45,
        },
        {
            name: 'Java Spring Boot',
            img: javaSpringIcon,
            width: 47,
            height: 47,
        },
        {
            name: 'PostgreSQL',
            img: postgreSqlicon,
            width: 48,
            height: 48
        }
    ]
}

