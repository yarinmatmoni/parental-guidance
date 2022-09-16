import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
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
      </section>
    </>
  )
}

export default Home;
