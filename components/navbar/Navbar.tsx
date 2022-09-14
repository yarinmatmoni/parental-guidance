import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import Image from 'next/image';
import * as Content from '../../utils/content/common';
import styles from './Navbar.module.scss';

function Navbar() {
    const isMobile = useMediaQuery({ query: `(max-width: 780px)` });
    const refMenu = useRef<HTMLUListElement>(null);
    const refIconBurger = useRef<HTMLDivElement>(null);

    const handleOpenBurgerMenu = () => {
        const menu: any = refMenu.current;
        menu.classList.toggle(styles.navMenuActive);
        const iconBurger: any = refIconBurger.current;
        iconBurger.classList.toggle(styles.openHamburger);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src="/Logo.png" height={isMobile ? 75 : 90} width={isMobile ? 100 : 125} alt="logo"></Image>
            </div>
            <ul ref={refMenu} className={styles.navMenu}>
                <div className={styles.wrapper}>
                    {Content.nav.map((menuItem, i) => (
                        <li key={i}><Link href="/"><a>{menuItem.name}</a></Link>
                            {menuItem.sub.length > 0 ?
                                <ul className={!isMobile ? styles.subMenu : styles.subMenuMobile}>
                                    {menuItem.sub.map((subMenuItem, i) => (
                                        <Link key={i} className={styles.link} href="/"><a>{subMenuItem.name}</a></Link>
                                    ))}
                                </ul>
                                : ''}
                        </li>
                    ))}
                </div>
            </ul>
            <div ref={refIconBurger} onClick={handleOpenBurgerMenu} className={styles.hamburger}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </nav>
    )
};

export default Navbar;