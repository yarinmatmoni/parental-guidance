import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import InfoBox from '../components/infoBox/InfoBox';
import TimeLine from '../components/timeLine/TimeLine';
import Carousel from '../components/carousel/Carousel';
import { motion } from 'framer-motion';
import * as Animation from '../utils/animation/animation';
import * as Content from '../utils/content/homePage';

const Home: NextPage = () => {
  return (
    <motion.div variants={Animation.pageAnimation} initial="hidden" animate="show">
      <Head>
        <title>שלהבת ברק - ייעוץ והדרכה הורית</title>
        <meta name="keywords" content="ייעוץ והדרכה הורית" />
      </Head>
      <section className={`${styles.section} ${styles.welcomeSection}`}>
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
      <section className={`${styles.section} ${styles.infoSection}`}>
        {Content.infoSection.map((box, i) => <InfoBox key={i} logo={box.logo} title={box.title} text={box.text} alt={box.alt} />)}
      </section>
      <section className={`${styles.section} ${styles.workPlan}`}>
        <h3>איך זה עובד ?</h3>
        <TimeLine data={Content.timeLineElements} />
      </section>
      <section className={`${styles.section} ${styles.quoteSection}`}>
        <div className={styles.quote}>
          <blockquote>
            אין ילד רע, יש ילד שרע לו בחייו, והוא מוציא את התיסכול שלו כלפי חוץ
          </blockquote>
          <small>יאנוש קורצ&#x27;אק</small>
        </div>
      </section>
      <section className={`${styles.section} ${styles.quotesCarousel}`}>
        <div className={styles.title}>
          <span className="material-symbols-outlined">star_rate</span>
          <h3>הורים ממליצים</h3>
        </div>
        <div className={styles.carousel}>
          <Carousel data={Content.reviews} />
        </div>
      </section>
      <section className={`${styles.section} ${styles.parallaxSection}`}></section>
    </motion.div>
  )
}

export default Home;
