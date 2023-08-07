import React from "react";
import styles from "./ContactMeSection.module.scss";
import Link from "../link/Link";
import { whatsAppHref } from "../../utils/content/hrefs";

const ContactMeSection = () => {
  return (
    <section className={`section ${styles.contactSection}`}>
      <p>
        אז אם קראתם עד לפה זה בדיוק הזמן ליצור איתי קשר
        <Link href={whatsAppHref} text={"בווצאפ"} tab={true} />
      </p>
    </section>
  );
};

export default ContactMeSection;
