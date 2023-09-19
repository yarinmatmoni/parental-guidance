import type { NextPage } from "next";
import MetaData from "../components/metadata/Metadata";
import { motion } from "framer-motion";
import { pageAnimation } from "../utils/animation/animation";
import React from "react";
import { contact, text } from "../utils/content/common";
import InfoSection from "../components/infoSection/InfoSection";
import TimelineSection from "../components/timelineSection/TimelineSection";
import QuoteSection from "../components/quoteSection/QuoteSection";
import RecommendedSection from "../components/recommendedSection/RecommendedSection";
import IntroSection from "../components/introSection/IntroSection";
import { whatsAppHref } from "../utils/content/hrefs";

const Home: NextPage = () => {
  const pageName = "ייעוץ והדרכה הורית";

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <MetaData
        title={`${text.name} - ${pageName}`}
        keywords={pageName}
        description={text.description}
      />
      <IntroSection
        title={text.name}
        subtitle={"ייעוץ והדרכה הורית"}
        imageName={"baby"}
        buttonLink={whatsAppHref}
        buttonText={contact.subtitle}
      >
        <h2>
          <div>ברוכים הבאים!</div>
          {text.description}
        </h2>
      </IntroSection>
      <InfoSection />
      <TimelineSection />
      <QuoteSection background />
      <RecommendedSection />
    </motion.div>
  );
};

export default Home;
