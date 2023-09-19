import React from "react";
import Image from "next/image";
import ContactForm from "../contactForm/ContactForm";
import styles from "./ParallaxSection.module.scss";
import { text } from "../../utils/content/common";

const ParallaxSection = () => {
  return (
    <section className={`section ${styles.parallaxSection}`}>
      <div className={styles.image}>
        <Image
          src={"/images/background.png"}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          alt={text.name}
          title={text.name}
        />
      </div>
      <div className={styles.contact}>
        <ContactForm />
      </div>
    </section>
  );
};

export default ParallaxSection;
