import React from "react";
import Metadata from "../../components/metadata/Metadata";
import OpenSection from "../../components/openSection/OpenSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../../utils/animation/animation";
import styles from "../../styles/Schedule.module.scss";
import { pagesData, text } from "../../utils/content/common";
import ListSection from "../../components/listSection/ListSection";
import type { GetStaticProps, GetStaticPaths } from "next";

const Page = ({ data }: any) => {
  if (!data) return;

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <Metadata
        title={`${text.name} - ${data.name}`}
        keywords={data.name}
        description={data.description}
      />
      <OpenSection data={data} />
      {data.importance && <ListSection data={data.importance} />}
      {data.how && <ListSection data={data.how} />}
      {data.summary && <ListSection data={data.summary} arrowList />}
      {data.example && (
        <section className={`section ${styles.example}`}>
          <p className={styles.title}>{data.example.title}</p>
          <p>{data.example.paragraph1.line1}</p>
          <p>{data.example.paragraph1.line2}</p>
          <p>{data.example.paragraph2}</p>
          <p>{data.example.paragraph3}</p>
        </section>
      )}
    </motion.div>
  );
};
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return { paths: [], fallback: "blocking" };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const pageName = context.params?.slug as string;
  const decodePageName = decodeURI(pageName);
  const pageData = pagesData[decodePageName];
  if (!pageData) {
    return { props: { hasError: true } };
  }

  return { props: { data: pageData } };
};

export default Page;
