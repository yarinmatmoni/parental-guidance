import React from "react";
import "react-vertical-timeline-component/style.min.css";
import Shape from "../shape/Shape";
import Timeline from "./timeline/Timeline";
import { timeLineElements } from "./content.const";
import styles from "./TimelineSection.module.scss";

const TimelineSection = () => {
  return (
    <section className={`section ${styles.workPlan}`}>
      <Shape name="shape2" height={250} top={"50%"} left={"5%"} />
      <Shape name="shape3" height={200} top={"50%"} left={"75%"} />
      <p className={styles.titleSection}>איך זה עובד ?</p>
      <Timeline data={timeLineElements} />
    </section>
  );
};

export default TimelineSection;
