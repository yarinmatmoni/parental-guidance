import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';

function Navbar() {

    const isMobile = useMediaQuery({ query: `(max-width: 780px)` });
    const refMenu = useRef<HTMLUListElement>(null);
    const refIconBurger = useRef<HTMLDivElement>(null);
    const refSub1 = useRef<HTMLUListElement>(null);
    const refSub2 = useRef<HTMLUListElement>(null);
    const refSub3 = useRef<HTMLUListElement>(null);

    const handleOpenBurgerMenu = () => {
        const menu: any = refMenu.current;
        menu.classList.toggle(styles.navMenuActive);
        const iconBurger: any = refIconBurger.current;
        iconBurger.classList.toggle(styles.openHamburger);

        if (!iconBurger.classList.contains(styles.openHamburger)) {
            refSub1.current?.classList.remove(styles.navMenuLinksMobileActive);
            refSub2.current?.classList.remove(styles.navMenuLinksMobileActive);
            refSub3.current?.classList.remove(styles.navMenuLinksMobileActive);
        }
    };

    const handleSubMenu = (index: number) => {
        if (isMobile) {
            switch (index) {
                case 1: {
                    if (!isMobile) {
                        refSub2.current?.classList.remove(styles.navMenuLinksActive);
                        refSub3.current?.classList.remove(styles.navMenuLinksActive);
                        refSub1.current?.classList.toggle(styles.navMenuLinksActive);
                    }
                    else
                        refSub1.current?.classList.toggle(styles.navMenuLinksMobileActive);
                    break;
                }
                case 2: {
                    if (!isMobile) {
                        refSub1.current?.classList.remove(styles.navMenuLinksActive);
                        refSub3.current?.classList.remove(styles.navMenuLinksActive);
                        refSub2.current?.classList.toggle(styles.navMenuLinksActive);
                    }
                    else
                        refSub2.current?.classList.toggle(styles.navMenuLinksMobileActive);
                    break;
                }
                case 3: {
                    if (!isMobile) {
                        refSub1.current?.classList.remove(styles.navMenuLinksActive);
                        refSub2.current?.classList.remove(styles.navMenuLinksActive);
                        refSub3.current?.classList.toggle(styles.navMenuLinksActive);
                    }
                    else
                        refSub3.current?.classList.toggle(styles.navMenuLinksMobileActive);
                    break;
                }
            }
        }
    };

    const handleHover = (index: number) => {
        if (!isMobile) {
            switch (index) {
                case 1: {
                    refSub3.current?.classList.remove(styles.navMenuLinksActive);
                    refSub2.current?.classList.remove(styles.navMenuLinksActive);
                    refSub1.current?.classList.add(styles.navMenuLinksActive);
                    break;
                }
                case 2: {
                    refSub1.current?.classList.remove(styles.navMenuLinksActive);
                    refSub3.current?.classList.remove(styles.navMenuLinksActive);
                    refSub2.current?.classList.add(styles.navMenuLinksActive);
                    break;
                }
                case 3: {
                    refSub1.current?.classList.remove(styles.navMenuLinksActive);
                    refSub2.current?.classList.remove(styles.navMenuLinksActive);
                    refSub3.current?.classList.add(styles.navMenuLinksActive);
                    break;
                }
            }
        }
    };

    const handleLeave = () => {
        refSub1.current?.classList.remove(styles.navMenuLinksActive);
        refSub2.current?.classList.remove(styles.navMenuLinksActive);
        refSub3.current?.classList.remove(styles.navMenuLinksActive);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Image src="/LOGO.png" height={isMobile ? 75 : 90} width={isMobile ? 100 : 120} alt="logo"></Image>
                </div>
                <ul ref={refMenu} className={styles.navMenu}>
                    <li onMouseLeave={handleLeave}><Link href="/"><a>עמוד הבית</a></Link></li>
                    <li className={styles.subMenu} onMouseLeave={handleLeave}>
                        <div className={styles.title} onClick={() => handleSubMenu(1)} onMouseEnter={() => handleHover(1)}>
                            <h3>הדרכה הורית</h3>
                            <span className="material-symbols-outlined">expand_more</span>
                        </div>
                        <ul ref={refSub1} className={isMobile ? styles.navMenuLinksMobile : styles.navMenuLinks}>
                            <Link href="/"><a>הדרכה הורית 1</a></Link>
                            <Link href="/"><a>הדרכה הורית 2</a></Link>
                        </ul>
                    </li>
                    <li className={styles.subMenu} onMouseLeave={handleLeave}>
                        <div className={styles.title} onClick={() => handleSubMenu(2)} onMouseEnter={() => handleHover(2)}>
                            <h3>יועצת שינה</h3>
                            <span className="material-symbols-outlined">expand_more</span>
                        </div>
                        <ul ref={refSub2} className={isMobile ? styles.navMenuLinksMobile : styles.navMenuLinks}>
                            <Link href="/"><a>מאמרים 1</a></Link>
                            <Link href="/"><a>מאמרים 2</a></Link>
                        </ul>
                    </li>
                    <li className={styles.subMenu} onMouseLeave={handleLeave}>
                        <div className={styles.title} onClick={() => handleSubMenu(3)} onMouseEnter={() => handleHover(3)}>
                            <h3>התמחויות</h3>
                            <span className="material-symbols-outlined">expand_more</span>
                        </div>
                        <ul ref={refSub3} className={isMobile ? styles.navMenuLinksMobile : styles.navMenuLinks}>
                            <Link href="/"><a>התמחות 1</a></Link>
                            <Link href="/"><a>התמחות 2</a></Link>
                        </ul>
                    </li>
                    <li onMouseLeave={handleLeave}><Link href="/"><a>גמילה מחיתולים</a></Link></li>
                </ul>
                <div ref={refIconBurger} onClick={handleOpenBurgerMenu} className={styles.hamburger}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>
        </header >
    )
};

export default Navbar;