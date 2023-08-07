import React from "react";
import Image from "next/image";
import styles from "./WelcomeSection.module.scss";
import Shape from "../shape/Shape";
import { motion } from "framer-motion";
import { fade } from "../../utils/animation/animation";
import Link from "../link/Link";
import { whatsAppHref } from "../../utils/content/hrefs";
import { contact, text } from "../../utils/content/common";
const WelcomeSection = () => {
  return (
    <section className={`section ${styles.welcomeSection}`}>
      <Shape name="shape1" height={300} top={-80} left={620} opacity={0.25} />
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="/images/baby.png"
          height="522px"
          width="520px"
          alt="cute baby"
        ></Image>
      </div>
      <h1 className={styles.title}>
        שלהבת ברק<div>ייעוץ והדרכה הורית</div>
      </h1>
      <div className={styles.content}>
        <span>ברוכים הבאים!</span>
        {text.description}
      </div>
      <motion.button className={styles.call} variants={fade}>
        <Link href={whatsAppHref} text={contact.subtitle} tab={true} />
      </motion.button>
    </section>
  );
};

export default WelcomeSection;
