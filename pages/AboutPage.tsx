import React from 'react';
import Head from 'next/head';
import Quote from '../components/quote/Quote';
import DesignParagraph from '../components/designParagraph/DesignParagraph';
import * as Quotes from '../utils/content/quotes';
import { motion } from 'framer-motion';
import Image from 'next/image';
import * as Content from '../utils/content/about';
import * as Animation from '../utils/animation/animation';
import styles from '../styles/AboutPage.module.scss';

function AboutPage() {
    return (
        <motion.div variants={Animation.pageAnimation} initial="hidden" animate="show">
            <Head>
                <title>שלהבת ברק - אודות</title>
                <meta name="keywords" content="אודות" />
            </Head>
            <section className={`section ${styles.introSection}`}>
                <div className={styles.about}>
                    <div className={styles.title}>
                        <motion.h1 variants={Animation.titleAnimation}>קצת עליי</motion.h1>
                        <motion.p variants={Animation.titleAnimation}>בואו נכיר קצת...</motion.p>
                    </div>
                    <div className={styles.info}>
                        {Content && Content.intro.introData.map((p, index) => <p key={index}>{p.paragraph}</p>)}
                    </div>
                </div>
                <motion.div variants={Animation.leftFadeIn} className={styles.image}>
                    <Image src='/images/aboutMe.jpeg' height={270} width={270} alt='AboutMe'></Image>
                </motion.div>
            </section>
            <section className={`section ${styles.QuoteSection}`}>
                <Quote data={Quotes.mainQuote} />
            </section>
            <section className={`section ${styles.mainSection}`}>
                {
                    Content && Content.intro.mainData.map((p, index) => <DesignParagraph key={`${index}_${p.alt}`} data={p} />)
                }
                <div className={styles.contact}>
                    <h3>אז אם קראתם עד לפה זה בדיוק הזמן ליצור איתי קשר <span>בווצאפ</span></h3>
                </div>
            </section>
        </motion.div >
    )
};

export default AboutPage;