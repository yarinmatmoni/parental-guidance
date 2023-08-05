import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import MetaData from '../components/metaData/MetaData';
import InfoBox from "../components/infoBox/InfoBox";
import TimeLine from "../components/timeLine/TimeLine";
import Carousel from "../components/carousel/Carousel";
import Quote from "../components/quote/Quote";
import Link from '../components/link/Link';
import { motion } from "framer-motion";
import { whatsAppHref } from '../utils/content/hrefs';
import { titleAnimation, pageAnimation, fade } from "../utils/animation/animation";
import * as Content from "../utils/content/homePage";
import * as Quotes from "../utils/content/quotes";
import Shape from "../components/shape/Shape";
import Image from "next/image";
import React from "react";

const Home: NextPage = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <MetaData
                title={'שלהבת ברק - ייעוץ והדרכה הורית'}
                keywords={'ייעוץ והדרכה הורית'}
                description={'נעים מאוד אני שלהבת ברק, נשואה ואם לשני ילדים, עידו ומיתר. עוסקת בתחום הייעוץ והדרכה למשפחות. אני מקיימת הדרכות אישיות ופרטניות להורים בהן אני מסייעת להם לרכוש כלים ולהציב מטרות ויעדים שיעזרו להם להתמודד עם האתגרים עימם ניצבים ביום יום'}
            />
            <section className={`section ${styles.welcomeSection}`}>
                <Shape name="shape1" height={300} top={-80} left={620} opacity={0.25} rotate={12} />
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src="/images/baby.png" height="522px" width="520px" alt="cute baby"></Image>
                </div>
                <div className={styles.title}>
                    <motion.h1 variants={titleAnimation}>שלהבת ברק</motion.h1>
                    <motion.h1 variants={titleAnimation}>ייעוץ והדרכה הורית</motion.h1>
                </div>
                <motion.div className={styles.content}>
                    <span>ברוכים הבאים!</span>
                    {Content.welcomeSection}
                </motion.div>
                <motion.button className={styles.call} variants={fade}>
                    <Link href={whatsAppHref} text={'שיחת יעוץ ראשונה - בחינם'} tab={true} />
                </motion.button>
            </section>
            <section className={`section ${styles.infoSection}`}>
                <Shape name="shape2" height={400} top={"1%"} left={"20%"} opacity={0.15} rotate={72} />
                {Content.infoSection.map((box, i) => (
                    <InfoBox key={i} data={box} />
                ))}
                <Shape name="shape3" height={350} top={"55%"} left={"60%"} opacity={0.2} rotate={10} />
            </section>
            <section className={`section ${styles.workPlan}`}>
                <Shape name="shape2" height={250} top={"50%"} left={"5%"} opacity={0.15}/>
                <p className={styles.titleSection}>איך זה עובד ?</p>
                <TimeLine data={Content.timeLineElements} />
                <Shape name="shape3" height={200} top={"50%"} left={"75%"} opacity={0.15} rotate={60}/>
            </section>
            <section className={`section ${styles.quoteSection}`}>
                <Quote data={Quotes.quote1} />
            </section>
            <section className={`section ${styles.quotesCarousel}`}>
                <p className={styles.titleSection}>הורים ממליצים</p>
                <div className={styles.carousel}>
                    <Carousel data={Content.reviews} />
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
