import React from 'react';
import styles from './TimeLineElement.module.scss';

function TimeLineElement({ data }: any) {
    return (
        <div className={styles.timelineItem}>
            <div className={styles.timeLineContent}>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <span className={styles.circle}></span>
            </div>
        </div>
    )
};

export default TimeLineElement;