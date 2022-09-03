import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

function Navbar() {

    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>לוגו</div>
                <ul className={!burgerActive ? styles.navMenu : `${styles.navMenu} ${styles.openMenu}`}>
                    <Link href="/"><a>עמוד הבית</a></Link>
                    <Link href="/"><a>עמוד הבית</a></Link>
                    <Link href="/"><a>עמוד הבית</a></Link>
                </ul>
                <div onClick={() => setBurgerActive(!burgerActive)} className={!burgerActive ? styles.hamburger : `${styles.hamburger} ${styles.openHamburger}`}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;