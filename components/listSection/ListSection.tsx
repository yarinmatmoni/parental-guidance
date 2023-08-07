import React from "react";
import styles from "./ListSection.module.scss";
import Shape from "../shape/Shape";

const ListSection = ({ data, arrowList }: any) => {
  return (
    <section className={`section ${styles.list}`}>
      <p className={styles.title}>{data.title}</p>
      <ul className={arrowList ? "arrowList" : "dotList"}>
        {data.paragraphs.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ListSection;
