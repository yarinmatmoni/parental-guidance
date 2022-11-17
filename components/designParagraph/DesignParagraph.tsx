import React from "react";
import Image from "next/image";
import styles from "./DesignParagraph.module.scss";
import { useScroll } from "../../utils/hooks/useScroll";
import { motion } from "framer-motion";
import { leftFadeIn, rightFadeIn } from "../../utils/animation/animation";

type paragraphProps = {
  data: {
    paragraph: string;
    icon: string;
    alt: string;
    animation: string;
  };
};

function DesignParagraph({ data }: paragraphProps) {
  const [element, controls]: any = useScroll();

  return (
    <motion.div
      className={styles.paragraphContainer}
      variants={
        data.animation === "left" ? leftFadeIn : rightFadeIn
      }
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <div className={styles.paragraph}>
        <p>{data.paragraph}</p>
      </div>
      <div>
        <Image src={data.icon} height={50} width={50} alt={data.alt}></Image>
      </div>
    </motion.div>
  );
}

export default DesignParagraph;
