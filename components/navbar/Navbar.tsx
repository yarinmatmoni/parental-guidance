import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

function Navbar() {

    const ref = useRef(null);
    const [burgerActive, setBurgerActive] = useState(false);
    const [ulList, setUlList] = useState<any>();

    const handleSubCategory = (index: number) => {
        const data = [...ulList];
        data[index].classList.toggle(styles.subNavOpen);
        setUlList(data);
    }

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
                            <div className={styles.subMenuTitle}>
                                <h2 onClick={() => handleSubCategory(0)}>הדרכה הורית</h2>
                                <span className="material-symbols-outlined">{ulList[0].classList.contains(styles.subNavOpen) ? 'arrow_drop_up' : 'arrow_drop_down'}</span>
                            </div>
                        }
                        <div className={styles.links}>
                            <Link href="/"><a>מאמרים</a></Link>
                            <Link href="/"><a>מאמרים</a></Link>
                        </div>
                    </ul>
                    <ul className={styles.subNavMenu}>
                        {ulList &&
                            <div className={styles.subMenuTitle}>
                                <h2 onClick={() => handleSubCategory(1)}>יועצת שינה</h2>
                                <span className="material-symbols-outlined">{ulList[1].classList.contains(styles.subNavOpen) ? 'arrow_drop_up' : 'arrow_drop_down'}</span>
                            </div>
                        }
                        <div className={styles.links}>
                            <Link href="/"><a>מאמרים</a></Link>
                            <Link href="/"><a>מאמרים</a></Link>
                        </div>
                    </ul>
                    <ul className={styles.subNavMenu}>
                        {ulList &&
                            <div className={styles.subMenuTitle}>
                                <h2 onClick={() => handleSubCategory(2)}>התמחות בהפרעת קשב וריכוז</h2>
                                <span className="material-symbols-outlined">{ulList[2].classList.contains(styles.subNavOpen) ? 'arrow_drop_up' : 'arrow_drop_down'}</span>
                            </div>
                        }
                        <div className={styles.links}>
                            <Link href="/"><a>מאמרים</a></Link>
                            <Link href="/"><a>מאמרים</a></Link>
                        </div>
                    </ul>
                    <ul className={styles.subNavMenu}>
                        {ulList &&
                            <div className={styles.subMenuTitle}>
                                <h2 onClick={() => handleSubCategory(3)}>גמילה מחיתולים</h2>
                                <span className="material-symbols-outlined">{ulList[3].classList.contains(styles.subNavOpen) ? 'arrow_drop_up' : 'arrow_drop_down'}</span>
                            </div>
                        }
                        <div className={styles.links}>
                            <Link href="/"><a>מאמרים</a></Link>
                            <Link href="/"><a>מאמרים</a></Link>
                        </div>
                    </ul>
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