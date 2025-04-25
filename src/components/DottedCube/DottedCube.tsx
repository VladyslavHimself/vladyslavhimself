import React from 'react';
import styles from './dottedCube.module.scss';

export default function DottedCube() {
    return (
        <div className={styles['dotted-cube']}>
            <div className={styles['dotted-cube-item']}/>
            <div className={styles['dotted-cube-item']}/>
            <div className={styles['dotted-cube-item']}/>
            <div className={styles['dotted-cube-item']}/>

            <div className={styles['dotted-cube-item']}/>
            <div className={styles['dotted-cube-item']}/>
            <div className={styles['dotted-cube-item']}/>
            <div className={styles['dotted-cube-item']}/>

            <div className={styles['dotted-cube-item']}/>
            <div className={styles['dotted-cube-item']}/>
            <div className={styles['dotted-cube-item']}/>
            <div className={styles['dotted-cube-item']}/>

        </div>
    );
};