import React from "react";
import Head from "next/head";
import { text } from "../../utils/content/common";

type Answer = {
  "@type": "Answer";
  text: string;
};

type Question = {
  "@type": "Question";
  name: string;
  acceptedAnswer: Answer;
};
const createJsonLdData = (inputData: {
  question: string;
  answer: string;
}): Question => {
  const { question, answer } = inputData;

  const answerData: Answer = {
    "@type": "Answer",
    text: answer,
  };

  const questionData: Question = {
    "@type": "Question",
    name: question,
    acceptedAnswer: answerData,
  };

  return questionData;
};
const Metadata = ({
  title,
  keywords,
  description,
  questions,
}: {
  title: string;
  keywords: string;
  description: string;
  questions?: any;
}) => {
  const mainEntity: Question[] = questions?.map((item: any) =>
    createJsonLdData(item)
  );
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="author" content={text.name} />
      <meta name="description" content={description} />
      {questions && (
        <script
          type="application/ld+json"
          id="ldjson_FAQPage"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "FAQPage",
              mainEntity: mainEntity,
            }),
          }}
        />
      )}
    </Head>
  );
};

export default Metadata;
