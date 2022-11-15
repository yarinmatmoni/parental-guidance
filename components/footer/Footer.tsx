import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import ContactLink from "../link/Link";
import { whatsAppHref, phoneCallHref, emailHref, faceBookHref } from "../../utils/content/hrefs";
import * as Content from "../../utils/content/common";
import Logo from "../logo/Logo";

function Footer() {
  return (
    <footer id="footer" className={styles.footerContainer}>
      <div className={styles.content}>
        <div className={styles.descriptionLogo}>
          <Logo height={80} width={100} />
          <div className={styles.description}>
            <p className={styles.title}>כמה מילים</p>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navContainer}>
            <div className={styles.block}>
              <p className={styles.title}>כללי</p>
              <ul>
                {Content.nav
                  .filter((menuItem) => menuItem.sub.length === 0)
                  .map((item, i) => (
                    <li key={i}>
                      <Link href={`${item.link}`}>
                        <a>{item.name}</a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            {Content.nav
              .filter((menuItem) => menuItem.sub.length !== 0)
              .map((item, i) => (
                <div key={i} className={styles.block}>
                  <p className={styles.title}>{item.name}</p>
                  <ul >
                    {item.sub.map((subMenuItem, i) => (
                      <li key={i}>
                        <Link href={`${subMenuItem.link}`}>
                          <a>{subMenuItem.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
        <div className={styles.contact}>
          <p className={styles.title}>יצירת קשר</p>
          <div className={styles.contactDetails}>
            <div className={styles.top}>
              <div className={styles.topItem}>
                <p className={styles.title}>
                  <span className="material-symbols-outlined">call</span>
                  <ContactLink href={phoneCallHref} text={Content.personalInfo.phoneNumber.display} />
                </p>
              </div>
              <div className={styles.topItem}>
                <p className={styles.title}>
                  <span className="material-symbols-outlined">mail</span>
                  <ContactLink href={emailHref} text={Content.personalInfo.email} tab={true} />
                </p>
              </div>
            </div>
            <div className={styles.bottom}>
              <ContactLink href={whatsAppHref} src={"/icons/whatsapp_icon.svg"} size={30} alt={"whatsapp_icon"} tab={true} />
              <ContactLink href={faceBookHref} src={"/icons/facebook_icon.svg"} size={30} alt={"facebook_icon"} tab={true} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
