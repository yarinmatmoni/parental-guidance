import React from "react";
import Image from "next/image";
import styles from "./InfoBox.module.scss";
import Router from 'next/router';

type InfoBoxProps = {
  data: {
    logo: string;
    title: string;
    text: string;
    alt: string;
    link: string;
  };
};

function InfoBox({ data }: InfoBoxProps) {
  return (
    <div className={styles.infoBox} onClick={() => Router.push(data.link)}>
      <Image src={data.logo} height={40} width={40} alt={data.alt}></Image>
      <h4>{data.title}</h4>
      <p>{data.text}</p>
    </div>
  );
}

export default InfoBox;
