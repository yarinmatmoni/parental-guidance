import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import * as Content from '../utils/content/common';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{Content.mainTitle}</title>
        <meta name="keywords" content="ייעוץ והדרכה הורית" />
      </Head>
      <section className={`${styles.section}`}>
        <h1>עמוד הבית</h1>
      </section>
    </>
  )
}

export default Home;
