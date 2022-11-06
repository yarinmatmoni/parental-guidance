import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import InfoBox from "../components/infoBox/InfoBox";
import TimeLine from "../components/timeLine/TimeLine";
import Carousel from "../components/carousel/Carousel";
import Quote from "../components/quote/Quote";
import Link from '../components/link/Link';
import { motion } from "framer-motion";
import { whatsAppHref } from '../utils/content/hrefs';
import * as Animation from "../utils/animation/animation";
import * as Content from "../utils/content/homePage";
import * as Quotes from "../utils/content/quotes";
import Shape from "../components/shape/Shape";

const Home: NextPage = () => {
  return (
    <motion.div
      variants={Animation.pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Head>
        <title>שלהבת ברק - ייעוץ והדרכה הורית</title>
        <meta name="keywords" content="ייעוץ והדרכה הורית" />
      </Head>
      <section className={`section ${styles.welcomeSection}`}>
        <Shape name="shape1" height={300} top={-80} left={220} opacity={0.25} rotate={12} />
        <div className={styles.title}>
          <motion.h1 variants={Animation.titleAnimation}>שלהבת ברק</motion.h1>
          <motion.h1 variants={Animation.titleAnimation}>
            ייעוץ והדרכה הורית
          </motion.h1>
        </div>
        <motion.div className={styles.content}>
          <span>ברוכים הבאים!</span>
          {Content.welcomeSection}
        </motion.div>
        <motion.button className={styles.call} variants={Animation.fade}>
          <Link href={whatsAppHref} text={'שיחת יעוץ ראשונה - בחינם'} tab={true} />
        </motion.button>
      </section>
      <section className={`section ${styles.infoSection}`}>
        {Content.infoSection.map((box, i) => (
          <InfoBox key={i} data={box} />
        ))}
        <Shape name="shape3" height={350} top={"55%"} left={"60%"} opacity={0.2} rotate={10} />
      </section>
      <section className={`section ${styles.workPlan}`}>
        <Shape
          name="shape2"
          height={250}
          top={"50%"}
          left={"5%"}
          opacity={0.15}
        />
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
    </motion.div>
  );
};

export default Home;
