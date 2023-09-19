import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../utils/animation/animation";
import { pagesData, text } from "../utils/content/common";
import IntroSection from "../components/introSection/IntroSection";
import ContactMeSection from "../components/contactMeSection/ContactMeSection";
import Metadata from "../components/metadata/Metadata";
import TableSection from "../components/tableSection/TableSection";
import QuoteSection from "../components/quoteSection/QuoteSection";
import QuestionsSection from "../components/questionsSection/QuestionsSection";

const About = () => {
  const pageName = "בקשת החזר מקופת חולים על ייעוץ שינה";

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <Metadata
        title={pageName}
        keywords={pageName}
        description={text.description}
      />
      <IntroSection
        title={"החזר קופת החולים על ייעוץ שינה"}
        imageName={"phone"}
      >
        <div>
          ניתן לקבל החזר של בערך <b> 400 ש״ח </b> מקופות החולים עבור ייעוץ שינה
          במידה והאמא מבוטחת לפי תנאי הפוליסה. בהמשך המאמר מצורפת טבלת השוואה
          לצורך בדיקת זכאות להחזר ייעוץ שינה.
        </div>
        <div>
          החשש מחוסר השינה אצל תינוקות מהווה דילמה מוכרת למערכת הבריאות בישראל
          ולהורים כאחד. מספר קופות חולים החליטו להציע החזר כספי על ייעוץ שינה
          הנעשה ע״י יועצי שינה מוסמכים. מטרת קופות החולים היא לעזור להורים
          להתמודד עם אתגרי השינה בשלבים הראשוניים של חיי התינוק.
        </div>
        <div>
          מחקרים מראים שחוסר השינה לתינוקות ופעוטות יכול להביא להשלכות רבות, החל
          מבעיות פיזיולוגיות ועד להשלכות נפשיות וכמובן רגשיות.
        </div>
        <div>
          בנוסף לפגיעה בסביבתו של התינוק וכמובן חוסר השינה של ההורים המתקשים גם
          במהלך היום יווצר כעס, עצבנות וחוסר סבלנות.
        </div>
        <div>
          הבעיות האלו לא יפטרו מעצמן ויכולות להתגבר עם הזמן. בשנים האחרונות חלה
          עלייה בקמות הפניות אל יועצי שינה ויש יותר הבנה שניתן לקבל עזרה בנושא.
        </div>
        <div>
          מכאן, ההבנה גם של קופות החולים שייעוץ שינה חשוב מאוד ותורם לתינוק
          ולסביבתו. יש לציין כי כדי להשתמש בהטבה כזו יש לבחון את ההנחיות
          והמגבלות הקשורות לכל קופה. עד כמה מדובר בהחזר כספי רלוונטי והאם אנו
          נוכל להנות מההחזר.
        </div>
        <div>
          רוב קופות החולים ממליצות להתחיל טיפול מגיל 5 חודשים, יש דעות חלוקות
          בנושא אך ככל שיש בעיות בשלבים מאוחרים יותר כדאי לקבל עזרה בשלב מוקדם
          ככל האפשר.
        </div>
      </IntroSection>
      <TableSection />
      <ContactMeSection />
      <QuestionsSection
        data={pagesData["אינטיליגנציה-רגשית"].questions}
        title={pageName}
      />
      <QuoteSection />
    </motion.div>
  );
};

export default About;
