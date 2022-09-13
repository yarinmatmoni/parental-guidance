import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>שלהבת ברק - ייעוץ והדרכה הורית</title>
        <meta name="keywords" content="ייעוץ והדרכה הורית" />
      </Head>
      <div className={styles.homePage}>
        <h1>עמוד הבית</h1>
      </div>
    </>
  )
}

export default Home
