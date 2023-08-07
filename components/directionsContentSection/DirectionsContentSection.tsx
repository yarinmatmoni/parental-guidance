import React from "react";
import styles from "./DirectionsContentSection.module.scss";
import { head } from "../../utils/content/about";
import DesignParagraph from "../designParagraph/DesignParagraph";

const DirectionsContentSection = () => {
  return (
    <section className={`section ${styles.mainSection}`}>
      {head?.mainData.map((p, index) => (
        <DesignParagraph key={`${index}_${p.alt}`} data={p} />
      ))}
    </section>
  );
};

export default DirectionsContentSection;
