import React from "react";
import MetaData from '../components/metaData/MetaData';
import Quote from "../components/quote/Quote";
import DesignParagraph from "../components/designParagraph/DesignParagraph";
import * as Quotes from "../utils/content/quotes";
import Link from '../components/link/Link';
import { motion } from "framer-motion";
import Image from "next/image";
import { whatsAppHref } from "../utils/content/hrefs";
import { intro } from "../utils/content/about";
import { titleAnimation, leftFadeIn, pageAnimation } from "../utils/animation/animation";
import styles from "../styles/AboutPage.module.scss";
import Shape from "../components/shape/Shape";

function AboutPage() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <MetaData
        title={'שלהבת ברק - אודות'}
        keywords={'אודות'}
        description={'נעים מאוד אני שלהבת ברק, נשואה ואם לשני ילדים, עידו ומיתר. עוסקת בתחום הייעוץ והדרכה למשפחות. המשימה שלי היא לעזור להורים החווים קשיים שונים בחיי המשפחה לקחת את השליטה חזרה אל הידיים שלהם באמצעות ידע, כלים ופתרונות פרקטיים שכל הורה חייב לקבל ובכך להתחיל תהליך ריפוי שבסופו ההורה וחיי משפחתו יהפכו לנעימים, רגועים ושמחים.​'}
      />
      <section className={`section ${styles.introSection}`}>
        <Shape name="shape3" height={300} top={"-15%"} left={"15%"} opacity={0.25} />
        <div className={styles.about}>
          <div className={styles.title}>
            <motion.h1 variants={titleAnimation}>קצת עליי</motion.h1>
            <motion.p variants={titleAnimation}>
              בואו נכיר קצת...
            </motion.p>
          </div>
          <div className={styles.info}>
            {intro?.introData.map((p, index) => (
              <p key={index}>{p.paragraph}</p>
            ))}
          </div>
        </div>
        <motion.div variants={leftFadeIn} className={styles.image}>
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
        {intro?.mainData.map((p, index) => (
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
