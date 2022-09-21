import React from 'react';
import * as Content from '../../utils/content/homePage';
import TimeLineElement from '../timeLineElement/TimeLineElement';
import styles from './TimeLine.module.scss';

function TimeLine() {
    return (
        <div className={styles.timeLineContainer}>
            {Content && Content.timeLineElements.map((element) => <TimeLineElement data={element} key={element.id} />)}
        </div>
    )
};

export default TimeLine;