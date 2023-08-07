import React from "react";
import { motion } from "framer-motion";
import { textUpAnimation } from "../../utils/animation/animation";
import styles from "./OpenSection.module.scss";

const OpenSection = ({ data }: any) => {
  return (
    <section className={`section ${styles.head}`}>
      <div className={styles.sectionContainer}>
        <motion.h1 variants={textUpAnimation}>{data.name}</motion.h1>
        {data.head?.intro?.map((paragraph: any, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
        {data.head?.subtitle && (
          <p className={styles.subtitle}>{data.head?.subtitle}</p>
        )}
        {data.head?.paragraphs?.map((paragraph: any, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default OpenSection;
