import React from 'react';
import Image from "next/image";
import Contact from "../../components/contact/Contact";
import styles from './ParallaxSection.module.scss';

function ParallaxSection() {
    return (
        <section className={`section ${styles.parallaxSection}`}>
            <div className={styles.image}>
                <Image
                    src={"/images/parallaxImage.jpeg"}
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                    alt="תמונה"
                    priority
                />
            </div>
            <div className={styles.contact}>
                <Contact />
            </div>
        </section>
    )
}

export default ParallaxSection;