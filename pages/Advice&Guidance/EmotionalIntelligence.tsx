import React from "react";
import MetaData from "../../components/metaData/MetaData";
import OpenSection from "../../components/openSection/OpenSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../../utils/animation/animation";
import { intro } from "../../utils/content/emotionalIntelligencePage";
import styles from "../../styles/EmotionalIntelligence.module.scss";

function EmotionalIntelligence() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <MetaData
        title={"שלהבת ברק - אינטליגנציה רגשית"}
        keywords={"אינטליגנציה ריגשית"}
        description={
          "אינטליגנציה רגשית היא היכולת או מיומנות של אדם לזהות, להעריך ולנהל את רגשותיו ואת רגשות האחר. בשונה לכישורים מולדים זהו כלי שניתן לרכוש אותו במהלך החיים ע״י למידה ותרגולאינטליגנציה רגשית זה הבסיס לשנות את נקודת המבט של ההורים על עצמם על הסביבה ומפה יגיע השינוי בילדים. אינטליגנציה רגשית זו שפה שאותה נלמד במהלך התהליך שלי מולכם."
        }
      />
      <section className={`section ${styles.intro}`}>
        <OpenSection
          title={"אינטליגנציה ריגשית"}
          openParagraphs={intro.introParagraph}
        />
      </section>
    </motion.div>
  );
}

export default EmotionalIntelligence;
