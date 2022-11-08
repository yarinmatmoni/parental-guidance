import React from 'react';
import MetaData from '../../components/metaData/MetaData';
import OpenSection from '../../components/openSection/OpenSection';
import { motion } from "framer-motion";
import * as Animation from "../../utils/animation/animation";
import Shape from "../../components/shape/Shape";
import * as Data from "../../utils/content/lovePage";
import styles from '../../styles/Love.module.scss';

function Love() {
    return (
        <motion.div variants={Animation.pageAnimation} initial="hidden" animate="show">
            <MetaData
                title={'שלהבת ברק - אהבה ללא תנאי'}
                keywords={'אהבה ללא תנאי'}
                description={'אהבה ללא תנאי זה לאהוב את האחר מבלי לשפוט או להטיף, לקבל את האחר כמו שהוא. אהבה ללא תנאי זוהי המתנה הכי עוצמתית וחשובה שנוכל להעניק לילדינו.'}
            />
            <section className={`section ${styles.intro}`}>
                <OpenSection title={"אהבה ללא תנאי"} subtitle={Data.intro.subtitle} paragraphs={Data.intro.paragraphs} />
                <Shape name="shape3" height={300} top={-60} left={100} opacity={0.2} rotate={150} />
            </section>
            <section className={`section ${styles.importance}`}>
                <h3>{Data.importance.title}</h3>
                <ul className='dotList'>
                    {Data.importance.list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <Shape name="shape2" height={280} top={'50%'} left={'40%'} opacity={0.12} rotate={0} />
            </section>
            <section className={`section ${styles.how}`}>
                <h3>{Data.how.title}</h3>
                <ul className='dotList'>
                    {Data.how.list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </section>
            <section className={`section ${styles.summary}`}>
                <h3>{Data.summary.title}</h3>
                <ul className='arrowList'>
                    {Data.summary.list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <Shape name="shape3" height={400} top={-50} left={'55%'} opacity={0.15} rotate={150} />
            </section>
        </motion.div>
    )
}

export default Love;