import React from "react";
import Image from "next/image";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "../../../styles/Home.module.scss";

type Timeline = {
  id: number;
  step: string;
  icon: string;
  title: string;
  description: string;
  alt: string;
};

const Timeline = ({ data }: any) => {
  let iconStyle = {
    backgroundColor: "#dceaf5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div>
      <VerticalTimeline lineColor="#bde0fe">
        {data &&
          data.map((e: Timeline) => {
            return (
              <VerticalTimelineElement
                key={e.id}
                date={e.step}
                iconStyle={iconStyle}
                contentArrowStyle={{ borderRight: "7px solid  #bde0fe" }}
                icon={
                  <Image
                    src={e.icon}
                    height={32}
                    width={32}
                    alt={e.alt}
                    title={e.alt}
                  ></Image>
                }
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: "#af85bc",
                    direction: "rtl",
                  }}
                >
                  {e.title}
                </div>
                <p
                  style={{ fontSize: 15, fontWeight: "300", color: "#3f4756" }}
                >
                  {e.description}
                </p>
              </VerticalTimelineElement>
            );
          })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
