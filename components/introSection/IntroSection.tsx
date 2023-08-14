import React from "react";
import styles from "./IntroSection.module.scss";
import Shape from "../shape/Shape";
import { motion } from "framer-motion";
import { fade, textUpAnimation } from "../../utils/animation/animation";
import Image from "next/image";
import Link from "../link/Link";

type Props = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  imageName: string;
  buttonText?: string;
  buttonLink?: string;
};

const IntroSection = ({
  children,
  title,
  subtitle,
  imageName,
  buttonText,
  buttonLink,
}: Props) => {
  return (
    <section className={`section ${styles.introSection}`}>
      <div className={styles.container}>
        <Shape name="shape1" height={400} top={"-80px"} left={"30%"} />
        <div className={styles.intro}>
          <h1 className={styles.title}>
            {title}
            {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
          </h1>
          <motion.div variants={textUpAnimation} className={styles.content}>
            {children}
            {buttonLink && buttonText && (
              <motion.button className={styles.button} variants={fade}>
                <Link href={buttonLink} text={buttonText} tab={true} />
              </motion.button>
            )}
          </motion.div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={`/images/${imageName}.png`}
            height="400px"
            width="400px"
            alt={title}
            objectFit="contain"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
