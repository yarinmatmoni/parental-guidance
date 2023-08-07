import React from "react";
import styles from "./QuoteSection.module.scss";
import Quote from "./quote/Quote";
import { quote1 } from "./content.const";
import Shape from "../shape/Shape";

const QuoteSection = ({ background }: { background?: boolean }) => {
  return (
    <section className={`section ${background && styles.quoteSection}`}>
      {!background && (
        <Shape name="shape1" height={350} top={"25%"} left={"65%"} />
      )}
      <Quote data={quote1} />
    </section>
  );
};

export default QuoteSection;
