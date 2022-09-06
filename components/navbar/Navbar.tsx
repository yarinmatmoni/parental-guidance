import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

function Navbar() {

    const ref = useRef(null);
    const refIconBurger = useRef(null);
    const [burgerActive, setBurgerActive] = useState(false);
    const [ulList, setUlList] = useState<any>();

    const handleSubCategory = (index: number) => {
        const data = [...ulList];
        data[index].classList.toggle(styles.subNavOpen);
        setUlList(data);
    }

    const handleBurger = () => {
        setBurgerActive(!burgerActive)
        const icon: any = refIconBurger.current;
        if (icon.classList.contains(styles.openHamburger)) {
            const menu: any = ref.current;
            const nl = [...menu.querySelectorAll('ul')];
            nl.forEach((ul) => {
                ul.classList.remove(styles.subNavOpen);
            });
        }
    };

    useEffect(() => {
        const menu: any = ref.current;
        const nl = menu.querySelectorAll('ul');
        setUlList([...nl]);
    }, []);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>לוגו</div>
                <ul ref={ref} className={!burgerActive ? styles.navMenu : `${styles.navMenu} ${styles.openMenu}`}>
                    <Link href="/"><a>עמוד הבית</a></Link>
                    <ul className={styles.subNavMenu}>
                        {ulList &&
                            <div onClick={() => handleSubCategory(0)} className={styles.subMenuTitle}>
                                <h3>הדרכה הורית</h3>
                                <span className="material-symbols-outlined">{ulList[0].classList.contains(styles.subNavOpen) ? 'expand_less' : 'keyboard_arrow_down'}</span>
                            </div>
                        }
                        <div className={!burgerActive ? styles.links : styles.linksMobile}>
                            <Link href="/"><a>מאמרים</a></Link>
                            <Link href="/"><a>מאמרים</a></Link>
                        </div>
                    </ul>
                    <ul className={styles.subNavMenu}>
                        {ulList &&
                            <div onClick={() => handleSubCategory(1)} className={styles.subMenuTitle}>
                                <h3>יועצת שינה</h3>
                                <span className="material-symbols-outlined">{ulList[1].classList.contains(styles.subNavOpen) ? 'expand_less' : 'keyboard_arrow_down'}</span>
                            </div>
                        }
                        <div className={!burgerActive ? styles.links : styles.linksMobile}>
                            <Link href="/"><a>מאמרים</a></Link>
                            <Link href="/"><a>מאמרים</a></Link>
                        </div>
                    </ul>
                    <ul className={styles.subNavMenu}>
                        {ulList &&
                            <div onClick={() => handleSubCategory(2)} className={styles.subMenuTitle}>
                                <h3>התמחות בהפרעת קשב וריכוז</h3>
                                <span className="material-symbols-outlined">{ulList[2].classList.contains(styles.subNavOpen) ? 'expand_less' : 'keyboard_arrow_down'}</span>
                            </div>
                        }
                        <div className={!burgerActive ? styles.links : styles.linksMobile}>
                            <Link href="/"><a>מאמרים</a></Link>
                            <Link href="/"><a>מאמרים</a></Link>
                        </div>
                    </ul>
                    <ul className={styles.subNavMenu}>
                        {ulList &&
                            <div onClick={() => handleSubCategory(3)} className={styles.subMenuTitle}>
                                <h3>גמילה מחיתולים</h3>
                                <span className="material-symbols-outlined">{ulList[3].classList.contains(styles.subNavOpen) ? 'expand_less' : 'keyboard_arrow_down'}</span>
                            </div>
                        }
                        <div className={!burgerActive ? styles.links : styles.linksMobile}>
                            <Link href="/"><a>מאמרים</a></Link>
                            <Link href="/"><a>מאמרים</a></Link>
                        </div>
                    </ul>
                </ul>
                <div ref={refIconBurger} onClick={handleBurger} className={!burgerActive ? styles.hamburger : `${styles.hamburger} ${styles.openHamburger}`}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;