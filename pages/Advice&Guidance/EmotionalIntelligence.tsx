import React from 'react';
import Head from "next/head";
import OpenSection from '../../components/openSection/OpenSection';
import { motion } from "framer-motion";
import * as Animation from "../../utils/animation/animation";
import * as Data from "../../utils/content/emotionalIntelligencePage";
import styles from '../../styles/EmotionalIntelligence.module.scss';

function EmotionalIntelligence() {
    return (
        <motion.div variants={Animation.pageAnimation} initial="hidden" animate="show">
            <Head>
                <title>שלהבת ברק - אינטליגנציה רגשית</title>
                <meta name="keywords" content="אינטליגנציה ריגשית" />
            </Head>
            <section className={`section ${styles.intro}`}>
                <OpenSection title={"אינטליגנציה ריגשית"} openParagraphs={Data.intro.introParagraph} />
            </section>
        </motion.div>
    )
}

export default EmotionalIntelligence;