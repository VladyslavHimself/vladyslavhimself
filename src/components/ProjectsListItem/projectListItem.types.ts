import styles from "@/components/ProjectsListItem/projectsListItem.module.scss";

export type ProjectListItemTypes = {
    title: string,
    description: string,
    link: string,
    contentClasses: keyof typeof styles
}