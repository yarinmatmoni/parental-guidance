import { url } from 'inspector';
import React from 'react';
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import * as styles from './TimeLine.module.scss';

type TimeLine = {
    id: number,
    step: string,
    icon: string,
    title: string,
    description: string
};

function TimeLine({ data }: any) {
    let iconStyle = { backgroundColor: '#ffc8dd', display: 'flex', justifyContent: 'center', alignItems: 'center' };

    return (
        <div>
            <VerticalTimeline>
                {data && data.map((e: TimeLine) => {
                    return (
                        <VerticalTimelineElement
                            key={e.id}
                            date={e.step}
                            iconStyle={iconStyle}
                            icon={<Image src={e.icon} height={35} width={35} alt={""}></Image>}
                        >
                            <h4 style={{ fontSize: 16, fontWeight: "500", color: "#3f4756" }}>{e.title}</h4>
                            <p>{e.description}</p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
};

export default TimeLine;