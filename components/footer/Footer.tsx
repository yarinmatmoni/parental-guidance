import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import ContactLink from "../link/Link";
import {
  whatsAppHref,
  phoneCallHref,
  emailHref,
  faceBookHref,
} from "../../utils/content/hrefs";
import { contact, nav, personalInfo } from "../../utils/content/common";
import Logo from "../logo/Logo";

const Footer = () => {
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
                {nav
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
            {nav
              .filter((menuItem) => menuItem.sub.length !== 0)
              .map((item, i) => (
                <div key={i} className={styles.block}>
                  <p className={styles.title}>{item.name}</p>
                  <ul>
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
          <p className={styles.title}>{contact.title}</p>
          <div className={styles.contactDetails}>
            <div className={styles.top}>
              <div className={styles.topItem}>
                <div className={styles.title}>
                  <Image
                    src={"/icons/phone_icon.svg"}
                    height={18}
                    width={18}
                    alt={"טלפון"}
                  ></Image>
                  <ContactLink
                    href={phoneCallHref}
                    text={personalInfo.phoneNumber.display}
                  />
                </div>
              </div>
              <div className={styles.topItem}>
                <div className={styles.title}>
                  <Image
                    src={"/icons/mail_icon.svg"}
                    height={18}
                    width={18}
                    alt={"דואר אלקטרוני"}
                  ></Image>
                  <ContactLink
                    href={emailHref}
                    text={personalInfo.email}
                    tab={true}
                  />
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <ContactLink
                href={whatsAppHref}
                src={"/icons/whatsapp_icon.svg"}
                size={30}
                alt={"whatsapp_icon"}
                tab={true}
              />
              <ContactLink
                href={faceBookHref}
                src={"/icons/facebook_icon.svg"}
                size={30}
                alt={"facebook_icon"}
                tab={true}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
