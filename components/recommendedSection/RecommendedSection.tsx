import React from "react";
import styles from "./RecommendedSection.module.scss";
import Carousel from "./carousel/Carousel";
import { recommends } from "./content.const";

const RecommendedSection = () => {
  return (
    <section className={`section ${styles.quotesCarousel}`}>
      <p className={styles.titleSection}>הורים ממליצים</p>
      <div className={styles.carousel}>
        <Carousel data={recommends} />
      </div>
    </section>
  );
};

export default RecommendedSection;
