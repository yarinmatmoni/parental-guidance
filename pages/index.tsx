import type { NextPage } from "next";
import MetaData from "../components/metadata/Metadata";
import { motion } from "framer-motion";
import { pageAnimation } from "../utils/animation/animation";
import React from "react";
import WelcomeSection from "../components/welcomeSection/WelcomeSection";
import { text } from "../utils/content/common";
import InfoSection from "../components/infoSection/InfoSection";
import TimelineSection from "../components/timelineSection/TimelineSection";
import QuoteSection from "../components/quoteSection/QuoteSection";
import RecommendedSection from "../components/recommendedSection/RecommendedSection";

const Home: NextPage = () => {
  const pageName = "ייעוץ והדרכה הורית";

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <MetaData
        title={`${text.name} - ${pageName}`}
        keywords={pageName}
        description={text.description}
      />
      <WelcomeSection />
      <InfoSection />
      <TimelineSection />
      <QuoteSection background />
      <RecommendedSection />
    </motion.div>
  );
};

export default Home;
