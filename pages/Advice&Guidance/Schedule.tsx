import React from 'react';
import Head from "next/head";
import * as Data from '../../utils/content/schedulePage';
import OpenSection from '../../components/openSection/OpenSection';
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
                <OpenSection title={"סדר יום לילדים"} openParagraphs={Data.intro.introParagraph} subtitle={Data.intro.subtitle} paragraphs={Data.intro.paragraphs} />
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
            <section className={`section ${styles.example}`}>
                <h3>{Data.example.title}</h3>
                <p>{Data.example.paragraph1.line1}</p>
                <p>{Data.example.paragraph1.line2}</p>
                <ul>
                    {Data.example.paragraph1.list.map((item, index) => <li key={`${index}_${item}`}>{item}</li>)}
                </ul>
                <p>{Data.example.paragraph2}</p>
                <p>{Data.example.paragraph3}</p>
            </section>
        </motion.div>
    )
}

export default Schedule;