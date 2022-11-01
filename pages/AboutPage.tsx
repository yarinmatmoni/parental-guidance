import React from "react";
import Head from "next/head";
import Quote from "../components/quote/Quote";
import DesignParagraph from "../components/designParagraph/DesignParagraph";
import * as Quotes from "../utils/content/quotes";
import Link from '../components/link/Link';
import { motion } from "framer-motion";
import Image from "next/image";
import { whatsAppHref } from "../utils/content/hrefs";
import * as Content from "../utils/content/about";
import * as Animation from "../utils/animation/animation";
import styles from "../styles/AboutPage.module.scss";
import Shape from "../components/shape/Shape";

function AboutPage() {
  return (
    <motion.div
      variants={Animation.pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Head>
        <title>שלהבת ברק - אודות</title>
        <meta name="keywords" content="אודות" />
      </Head>
      <section className={`section ${styles.introSection}`}>
        <Shape name="shape3" height={300} top={"-15%"} left={"15%"} opacity={0.25} />
        <div className={styles.about}>
          <div className={styles.title}>
            <motion.h1 variants={Animation.titleAnimation}>קצת עליי</motion.h1>
            <motion.p variants={Animation.titleAnimation}>
              בואו נכיר קצת...
            </motion.p>
          </div>
          <div className={styles.info}>
            {Content &&
              Content.intro.introData.map((p, index) => (
                <p key={index}>{p.paragraph}</p>
              ))}
          </div>
        </div>
        <motion.div variants={Animation.leftFadeIn} className={styles.image}>
          <Image
            src="/images/aboutMe.jpeg"
            height={220}
            width={220}
            alt="AboutMe"
          ></Image>
        </motion.div>
      </section>
      <section className={`section ${styles.QuoteSection}`}>
        <Shape name="shape1" height={350} top={"25%"} left={"65%"} opacity={0.2} />
        <Quote data={Quotes.quote1} />
      </section>
      <section className={`section ${styles.mainSection}`}>
        {Content &&
          Content.intro.mainData.map((p, index) => (
            <DesignParagraph key={`${index}_${p.alt}`} data={p} />
          ))}
        <div className={styles.contact}>
          <h3>
            אז אם קראתם עד לפה זה בדיוק הזמן ליצור איתי קשר{" "}
            <Link href={whatsAppHref} text={'בווצאפ'} tab={true} />
          </h3>
        </div>
      </section>
    </motion.div>
  );
}

export default AboutPage;
