import React from "react";
import { motion } from "framer-motion";
import { titleAnimation } from "../../utils/animation/animation";
import styles from "./OpenSection.module.scss";

function OpenSection({
  title,
  openParagraphs,
  subtitle,
  paragraphs,
}: {
  title: string;
  openParagraphs?: string[];
  subtitle?: string;
  paragraphs?: string[];
}) {
  return (
    <div className={styles.sectionContainer}>
      <motion.h1 variants={titleAnimation}>{title}</motion.h1>
      {openParagraphs?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <p className={styles.subtitle}>{subtitle}</p>
      {paragraphs?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default OpenSection;
