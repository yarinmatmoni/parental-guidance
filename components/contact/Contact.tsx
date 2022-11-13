import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import * as contact from "../../utils/content/common";
import styles from "./Contact.module.scss";

function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [valid, setValid] = useState(true);
  const [userAgent, setUserAgent] = useState("");
  const form: any = useRef();

  useEffect(() => {
    setUserAgent(navigator.platform);
  }, []);

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    let isValid = true;

    Array.from(form.current).map((filed: any) => {
      if (!filed.name)
        return;

      if (!filed.value) {
        isValid = false;
        setValid(false);
        return;
      }
    })

    if (isValid && !isSent) {
      emailjs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, form.current, `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`)
        .then((result) => {
          console.log(result.text);
          setIsSent(true);
          setValid(true);
          event.target.reset();
        }, (error) => {
          console.log(error.text);
        });
    }
  }

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
        <form method="post" onSubmit={handleOnSubmit} ref={form}>
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
          <input
            type="hidden"
            className="form-control"
            name="userAgent"
            value={userAgent}
          />
          <span data-valid={valid} data-sent={isSent}>{valid && !isSent ? '' : valid && isSent ? 'תודה, אצור קשר בהקדם' : 'בדוק האם כל הפרטים נכונים'}</span>
          <button type="submit" data-sent={isSent} value="Send" name="submitButton">שלהבת, חזרי אלי</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
