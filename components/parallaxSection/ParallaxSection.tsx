import React from "react";
import Image from "next/image";
import ContactForm from "../contactForm/ContactForm";
import styles from "./ParallaxSection.module.scss";

const ParallaxSection = () => {
  return (
    <section className={`section ${styles.parallaxSection}`}>
      <div className={styles.image}>
        <Image
          src={"/images/parallaxImage.jpeg"}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          alt="שלהבת ברק"
          priority
        />
      </div>
      <div className={styles.contact}>
        <ContactForm />
      </div>
    </section>
  );
};

export default ParallaxSection;
