import React from "react";
import Image from "next/image";
import * as contact from "../../utils/content/common";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.top}>
        <div className={styles.title}>
          <h2>{contact.contact.title}</h2>
          <p>{contact.contact.subtitle}</p>
        </div>
        <div className={styles.details}>
          {contact.contact.detailsForContact.map((item, index) => {
            return (
              <div key={`${index}_${item.name}`} className={styles.item}>
                <Image
                  src={item.icon}
                  height={18}
                  width={18}
                  alt={item.alt}
                ></Image>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.contact}>
        <form method="post">
          {contact.contact.data.map((item, index) => {
            return (
              <input
                key={`${index}_${item.name}`}
                type={item.type}
                name={item.inputName}
                placeholder={item.name}
              ></input>
            );
          })}
          <textarea name="message" placeholder="הקלד טקסט..."></textarea>
          <button>קביעת פגישת היכרות</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
