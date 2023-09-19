import React, { useEffect, useMemo } from "react";
import styles from "./QuoteSection.module.scss";
import Quote from "./quote/Quote";
import { quotes } from "./content.const";
import Shape from "../shape/Shape";

const QuoteSection = ({ background }: { background?: boolean }) => {
  const [hydrated, setHydrated] = React.useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const quote = hydrated && Math.floor(Math.random() * quotes.length);

  return (
    <section
      className={`section ${styles.quoteSection} ${
        background && styles.withBackground
      }`}
    >
      {!background && (
        <Shape name="shape1" height={350} top={"15%"} left={"65%"} />
      )}
      {quote && <Quote data={quotes[quote]} />}
    </section>
  );
};

export default QuoteSection;
