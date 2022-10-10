import React from "react";
import styles from "./Quote.module.scss";

type QuoteProps = {
  data: {
    name: string;
    quote: string;
  };
};

function Quote({ data }: QuoteProps) {
  return (
    <div className={styles.quoteContainer}>
      <blockquote>{data.quote}</blockquote>
      <small>{data.name}</small>
    </div>
  );
}

export default Quote;
