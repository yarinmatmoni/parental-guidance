import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import InfoBox from '../components/infoBox/InfoBox';
import TimeLine from '../components/timeLine/TimeLine';
import Carousel from '../components/carousel/Carousel';
import Quote from '../components/quote/Quote';
import Contact from '../components/contact/Contact';
import { motion } from 'framer-motion';
import * as Animation from '../utils/animation/animation';
import * as Content from '../utils/content/homePage';
import * as Quotes from '../utils/content/quotes';

const Home: NextPage = () => {
  return (
    <motion.div variants={Animation.pageAnimation} initial="hidden" animate="show">
      <Head>
        <title>שלהבת ברק - ייעוץ והדרכה הורית</title>
        <meta name="keywords" content="ייעוץ והדרכה הורית" />
      </Head>
      <section className={`section ${styles.welcomeSection}`}>
        <div className={styles.title}>
          <motion.h1 variants={Animation.titleAnimation}>שלהבת ברק</motion.h1>
          <motion.h1 variants={Animation.titleAnimation}>ייעוץ והדרכה הורית</motion.h1>
        </div>
        <motion.div className={styles.content}>
          <span>ברוכים הבאים!</span>
          {Content.welcomeSection}
        </motion.div>
        <motion.button className={styles.call} variants={Animation.fade}>שיחת יעוץ ראשונה - בחינם</motion.button>
      </section>
      <section className={`section ${styles.infoSection}`}>
        {Content.infoSection.map((box, i) => <InfoBox key={i} data={box} />)}
      </section>
      <section className={`section ${styles.workPlan}`}>
        <h3>איך זה עובד ?</h3>
        <TimeLine data={Content.timeLineElements} />
      </section>
      <section className={`section ${styles.quoteSection}`}>
        <Quote data={Quotes.quote1} />
      </section>
      <section className={`section ${styles.quotesCarousel}`}>
        <div className={styles.title}>
          <span className="material-symbols-outlined">star_rate</span>
          <h3>הורים ממליצים</h3>
        </div>
        <div className={styles.carousel}>
          <Carousel data={Content.reviews} />
        </div>
      </section>
      <section className={`section ${styles.parallaxSection}`}>
        <div className={styles.image}>
          <Image src={'/images/parallaxImage.jpeg'} objectFit="cover" objectPosition="center" layout="fill" alt="תמונה" />
        </div>
        <div className={styles.contact}>
          <Contact />
        </div>
      </section>
    </motion.div>
  )
}

export default Home;
