import React from 'react';
import { motion } from "framer-motion";
import * as Animation from "../../utils/animation/animation";
import styles from './OpenSection.module.scss';

function OpenSection({ title, openParagraphs, subtitle, paragraphs }: { title: string, openParagraphs?: string[], subtitle?: string, paragraphs?: string[] }) {
    return (
        <div className={styles.sectionContainer}>
            <motion.h1 variants={Animation.titleAnimation}>{title}</motion.h1>
            {openParagraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <h3>{subtitle}</h3>
            {paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
    )
}

export default OpenSection;