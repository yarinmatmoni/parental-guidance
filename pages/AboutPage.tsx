import React from 'react';
import Head from 'next/head';
import Quote from '../components/quote/Quote';
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
                        {Content && Content.intro.data.map((p, index) => <p key={index}>{p.paragraph}</p>)}
                    </div>
                </div>
                <motion.div variants={Animation.leftFadeIn} className={styles.image}>
                    <Image src='/images/aboutMe.jpeg' height={280} width={280} alt='AboutMe'></Image>
                </motion.div>
            </section>
            <section className={`section ${styles.QuoteSection}`}>
                <Quote data={Quotes.mainQuote} />
            </section>
        </motion.div>
    )
};

export default AboutPage;