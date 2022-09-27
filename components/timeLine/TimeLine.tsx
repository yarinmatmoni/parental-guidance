import React from 'react';
import Image from 'next/image';
import styles from './TimeLine.module.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type TimeLine = {
    id: number,
    step: string,
    icon: string,
    title: string,
    description: string,
    alt: string,
};

function TimeLine({ data }: any) {
    let iconStyle = { backgroundColor: '#dceaf5', display: 'flex', justifyContent: 'center', alignItems: 'center' };

    return (
        <div>
            <VerticalTimeline
                lineColor='#bde0fe'
            >
                {data && data.map((e: TimeLine) => {
                    return (
                        <VerticalTimelineElement
                            key={e.id}
                            date={e.step}
                            iconStyle={iconStyle}
                            contentArrowStyle={{ borderRight: '7px solid  #bde0fe' }}
                            icon={<Image src={e.icon} height={32} width={32} alt={e.alt}></Image>}
                        >
                            <h4 style={{ fontSize: 16, fontWeight: "500", color: "#af85bc", direction: "rtl" }}>{e.title}</h4>
                            <p style={{ fontSize: 15, fontWeight: "300", color: '#3f4756' }}>{e.description}</p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline >
        </div >
    )
};

export default TimeLine;