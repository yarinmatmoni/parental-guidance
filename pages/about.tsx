import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../utils/animation/animation";
import { text } from "../utils/content/common";
import AboutSection from "../components/aboutSection/AboutSection";
import QuoteSection from "../components/quoteSection/QuoteSection";
import DirectionsContentSection from "../components/directionsContentSection/DirectionsContentSection";
import ContactMeSection from "../components/contactMeSection/ContactMeSection";
import Metadata from "../components/metadata/Metadata";

const About = () => {
  const pageName = "אודות";
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <Metadata
        title={`${text.name} - ${pageName}`}
        keywords={pageName}
        description={text.about}
      />
      <AboutSection />
      <QuoteSection />
      <DirectionsContentSection />
      <ContactMeSection />
    </motion.div>
  );
};

export default About;
