import React from "react";
import Image from "next/image";
import styles from "./AboutSection.module.scss";
import Shape from "../shape/Shape";
import { motion } from "framer-motion";
import { leftFadeIn, textUpAnimation } from "../../utils/animation/animation";
import { head } from "../../utils/content/about";

const AboutSection = () => {
  return (
    <section className={`section ${styles.introSection}`}>
      <Shape name="shape3" height={300} top={"-15%"} left={"15%"} />
      <div className={styles.about}>
        <h1 className={styles.title}>
          קצת עליי
          <div>בואו נכיר קצת...</div>
        </h1>
        <motion.div variants={textUpAnimation} className={styles.info}>
          {head?.introData.map((p, index) => (
            <p key={index}>{p.paragraph}</p>
          ))}
        </motion.div>
      </div>
      <motion.div variants={leftFadeIn} className={styles.image}>
        <Image
          src="/images/aboutMe.jpeg"
          width={300}
          height={300}
          objectFit="cover"
          alt="About me"
        ></Image>
      </motion.div>
    </section>
  );
};

export default AboutSection;
