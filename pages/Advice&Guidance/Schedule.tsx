import React from 'react';
import Head from "next/head";
import * as Data from '../../utils/content/schedulePage';
import { motion } from "framer-motion";
import * as Animation from "../../utils/animation/animation";
import Shape from "../../components/shape/Shape";
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
                <p>{Data.intro.endParagraph.line1}</p>
                <p>{Data.intro.endParagraph.line2}</p>
                <Shape name="shape1" height={300} top={-50} left={220} opacity={0.35} rotate={210} />
            </section>
            <section className={`section ${styles.importance}`}>
                <h3>{Data.importance.title}</h3>
                <ul>
                    {Data.importance.list.map((item, index) => (
                        <li key={`${index}_${item}`}>{item}</li>
                    ))}
                </ul>
                <Shape name="shape3" height={250} top={250} left={20} opacity={0.15} rotate={0} />
            </section>
        </motion.div>
    )
}

export default Schedule;