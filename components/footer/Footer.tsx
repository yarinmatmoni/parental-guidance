import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.content}>
                <div className={styles.descriptionLogo}>
                    <div className={styles.logo}>
                        <Image src='/LOGO.png' height={110} width={110} alt='logo'></Image>
                    </div>
                    <div className={styles.description}>
                        <h4>כמה מילים</h4>
                    </div>
                </div>
                <div className={styles.navigation}>
                    <div className={styles.navContainer}>
                        <ul>
                            <h4>כללי</h4>
                            <Link href="/"><a>עמוד הבית</a></Link>
                            <Link href="/"><a>אודות</a></Link>

                        </ul>
                        <ul>
                            <h4>הדרכה הורית</h4>
                            <Link href="/"><a>סדנאות להורים ולאנשי חינוך</a></Link>
                            <Link href="/"><a>הדרכה הורית לגיל הרך</a></Link>
                            <Link href="/"><a>גמילה ממוצץ</a></Link>
                            <Link href="/"><a>גמילה מחיתולים</a></Link>
                        </ul>
                        <ul>
                            <h4>יועצת שינה</h4>
                            <Link href="/"><a>מאמר 1</a></Link>
                            <Link href="/"><a>מאמר 2</a></Link>
                        </ul>
                        <ul>
                            <h4>התמחויות</h4>
                            <Link href="/"><a>הפרעות קשב וריכוז</a></Link>
                            <Link href="/"><a>התמחות 2</a></Link>
                        </ul>
                    </div>
                </div>
                <div className={styles.contact}>
                    <h4>יצירת קשר</h4>
                    <div className={styles.contactDetails}>
                        <div className={styles.top}>
                            <div className={styles.topItem}>
                                <span className="material-symbols-outlined">call</span>
                                <h4>050-5432052</h4>
                            </div>
                            <div className={styles.topItem}>
                                <span className="material-symbols-outlined">mail</span>
                                <h4>yarinmatmoni@gmail.com</h4>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <Image src='/whatsapp_icon.svg' height={30} width={30} alt="whatsapp_icon" ></Image>
                            <Image src='/facebook_icon.svg' height={30} width={30} alt="facebook_icon" ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
};

export default Footer;