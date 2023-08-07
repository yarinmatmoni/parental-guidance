import React from "react";
import Head from "next/head";
import { text } from "../../utils/content/common";

const Metadata = ({
  title,
  keywords,
  description,
}: {
  title: string;
  keywords: string;
  description: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="author" content={text.name} />
      <meta name="description" content={description} />
    </Head>
  );
};

export default Metadata;
