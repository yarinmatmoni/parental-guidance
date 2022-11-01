import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import ContactLink from "../link/Link";
import Image from "next/image";
import { whatsAppHref, phoneCallHref } from "../../utils/content/hrefs";
import * as Content from "../../utils/content/common";
import Logo from "../logo/Logo";

function Footer() {
  return (
    <footer id="footer" className={styles.footerContainer}>
      <div className={styles.content}>
        <div className={styles.descriptionLogo}>
          <Logo height={80} width={100} />
          <div className={styles.description}>
            <h4>כמה מילים</h4>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navContainer}>
            <ul>
              <h4>כללי</h4>
              {Content.nav
                .filter((menuItem) => menuItem.sub.length === 0)
                .map((item, i) => (
                  <Link key={i} href={`${item.link}`}>
                    <a>{item.name}</a>
                  </Link>
                ))}
            </ul>
            {Content.nav
              .filter((menuItem) => menuItem.sub.length !== 0)
              .map((item, i) => (
                <ul key={i}>
                  <h4>{item.name}</h4>
                  {item.sub.map((subMenuItem, i) => (
                    <Link key={i} href="/">
                      <a>{subMenuItem.name}</a>
                    </Link>
                  ))}
                </ul>
              ))}
          </div>
        </div>
        <div className={styles.contact}>
          <h4>יצירת קשר</h4>
          <div className={styles.contactDetails}>
            <div className={styles.top}>
              <div className={styles.topItem}>
                <span className="material-symbols-outlined">call</span>
                <h4>
                  <ContactLink href={phoneCallHref} text={Content.personalInfo.phoneNumber.display} />
                </h4>
              </div>
              <div className={styles.topItem}>
                <span className="material-symbols-outlined">mail</span>
                <h4>
                  <a>{Content.personalInfo.email}</a>
                </h4>
              </div>
            </div>
            <div className={styles.bottom}>
              <ContactLink href={whatsAppHref} src={"/icons/whatsapp_icon.svg"} size={30} alt={"whatsapp_icon"} tab={true} />
              <a>
                <Image
                  src="/icons/facebook_icon.svg"
                  height={30}
                  width={30}
                  alt="facebook_icon"
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
