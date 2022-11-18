import React from 'react';
import MetaData from '../../components/metaData/MetaData';
import * as Data from '../../utils/content/schedulePage';
import OpenSection from '../../components/openSection/OpenSection';
import { motion } from "framer-motion";
import { pageAnimation } from "../../utils/animation/animation";
import Shape from "../../components/shape/Shape";
import styles from '../../styles/Schedule.module.scss';

function Schedule() {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <MetaData
                title={'שלהבת ברק - סדר יום לילדים'}
                keywords={'סדר יום לילדים'}
                description={'סדר יום מתבטא במספר פעולות שיוצרות את מהלך היומיום שלנו, תכנון היומיום לפי סדר מסוים. חשוב לזכור סדר יום זהו ארגון לוח הזמנים לא רק של הילדים אלה גם שלנו כהורים.'}
            />
            <section className={`section ${styles.intro}`}>
                <OpenSection title={"סדר יום לילדים"} openParagraphs={Data.intro.introParagraph} subtitle={Data.intro.subtitle} paragraphs={Data.intro.paragraphs} />
                <Shape name="shape1" height={300} top={-50} left={220} opacity={0.35} rotate={210} />
            </section>
            <section className={`section ${styles.importance}`}>
                <p className={styles.title}>{Data.importance.title}</p>
                <ul className='dotList'>
                    {Data.importance.list.map((item, index) => (
                        <li key={`${index}_${item}`}>{item}</li>
                    ))}
                </ul>
                <Shape name="shape3" height={350} top={'40%'} left={'20%'} opacity={0.15} rotate={180} />
            </section>
            <section className={`section ${styles.example}`}>
                <p className={styles.title}>{Data.example.title}</p>
                <p>{Data.example.paragraph1.line1}</p>
                <p>{Data.example.paragraph1.line2}</p>
                <ul className='arrowList'>
                    {Data.example.paragraph1.list.map((item, index) => <li key={`${index}_${item}`}>{item}</li>)}
                </ul>
                <p>{Data.example.paragraph2}</p>
                <p>{Data.example.paragraph3}</p>
            </section>
        </motion.div>
    )
}

export default Schedule;