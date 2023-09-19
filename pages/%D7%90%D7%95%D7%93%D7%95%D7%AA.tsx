import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../utils/animation/animation";
import { text } from "../utils/content/common";
import QuoteSection from "../components/quoteSection/QuoteSection";
import DirectionsContentSection from "../components/directionsContentSection/DirectionsContentSection";
import ContactMeSection from "../components/contactMeSection/ContactMeSection";
import Metadata from "../components/metadata/Metadata";
import { head } from "../utils/content/about";
import IntroSection from "../components/introSection/IntroSection";

const D790D795D793D795D7AA = () => {
  const pageName = "אודות";

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <Metadata
        title={`${text.name} - ${pageName}`}
        keywords={pageName}
        description={text.description}
      />
      <IntroSection
        title={"קצת עליי"}
        subtitle={"בואו נכיר קצת.."}
        imageName={"me"}
      >
        <div>{text.description}</div>
        <div>{text.extraDescription}</div>
      </IntroSection>
      <QuoteSection />
      <DirectionsContentSection />
      <ContactMeSection />
    </motion.div>
  );
};

export default D790D795D793D795D7AA;
