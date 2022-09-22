import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import InfoBox from '../components/infoBox/InfoBox';
import TimeLine from '../components/timeLine/TimeLine';
import * as Content from '../utils/content/homePage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>שלהבת ברק - ייעוץ והדרכה הורית</title>
        <meta name="keywords" content="ייעוץ והדרכה הורית" />
      </Head>
      <section className={`${styles.section} ${styles.welcomeSection}`}>
        <div className={styles.title}>
          <h1>שלהבת ברק</h1>
          <h1>ייעוץ והדרכה הורית</h1>
        </div>
        <div className={styles.content}>
          <h3>ברוכים הבאים!</h3>
          <h4>{Content.welcomeSection.line1}</h4>
          <h4>{Content.welcomeSection.line2}</h4>
        </div>
        <div className={styles.call}>
          <h4>שיחת ייעוץ ראשונה - בחינם</h4>
        </div>
      </section>
      <section className={`${styles.section} ${styles.infoSection}`}>
        {Content.infoSection.map((box, i) => <InfoBox key={i} logo={box.logo} title={box.title} text={box.text} />)}
      </section>
      <section className={`${styles.section} ${styles.workPlan}`}>
        <h3>איך זה עובד ?</h3>
        <TimeLine data={Content.timeLineElements} />
      </section>
    </>
  )
}

export default Home;
