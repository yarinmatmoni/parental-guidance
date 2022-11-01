import React from 'react';
import Head from "next/head";
import * as Data from '../../utils/content/schedulePage';
import { motion } from "framer-motion";
import * as Animation from "../../utils/animation/animation";
import styles from '../../styles/Schedule.module.scss';

function Schedule() {
    return (
        <motion.div variants={Animation.pageAnimation} initial="hidden" animate="show">
            <Head>
                <title>שלהבת ברק - סדר יום לילדים</title>
                <meta name="keywords" content="סדר יום לילדים" />
            </Head>
            <section className={`section ${styles.intro}`}>
                <motion.h1 variants={Animation.titleAnimation}>סדר יום לילדים</motion.h1>
                <p>{Data.intro.introParagraph}</p>
                <h3>{Data.intro.title}</h3>
                <p>{Data.intro.endParagraph}</p>
            </section>
            <section className={`section ${styles.importance}`}>

            </section>
        </motion.div>
    )
}

export default Schedule;