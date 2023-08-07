import React from "react";
import styles from "./InfoSection.module.scss";
import Shape from "../shape/Shape";
import InfoBox from "./infoBox/InfoBox";
import { infoSection } from "./content.const";

const InfoSection = () => {
  return (
    <section className={`section ${styles.infoSection}`}>
      <Shape name="shape2" height={400} top={"1%"} left={"20%"} rotate={72} />
      {infoSection.map((box, i) => (
        <InfoBox key={i} data={box} />
      ))}
      <Shape name="shape3" height={350} top={"55%"} left={"60%"} />
    </section>
  );
};

export default InfoSection;
