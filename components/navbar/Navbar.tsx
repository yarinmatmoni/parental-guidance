import React, { useRef, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo/logo1.svg';
import * as Content from '../../utils/content/common';
import styles from './Navbar.module.scss';

function Navbar() {
    const refMenuContainer = useRef<HTMLUListElement>(null);
    // const refIconBurger = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (refMenuContainer.current && !refMenuContainer.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }

    }, []);

    const onMenuClick = () => {
        setIsOpen(!isOpen);

    };

    return (
        <nav ref={refMenuContainer} className={styles.nav}>
            <div className={styles.logo}>
                <Image src={logo} height={75} width={75} alt="logo"></Image>
            </div>
            <ul className={styles.navMenu} data-open={isOpen}>
                <div className={styles.wrapper}>
                    {Content.nav && Content.nav.map((menuItem, i) => (
                        <li key={i}> {menuItem.sub.length > 0 ? menuItem.name : <Link href={`${menuItem.link}`}><a onClick={onMenuClick}>{menuItem.name}</a></Link>}
                            {menuItem.sub.length > 0 ?
                                <ul className={styles.subMenu} data-open={isOpen}>
                                    {menuItem.sub.map((subMenuItem, i) => (
                                        <Link key={i} className={styles.link} href={`${subMenuItem.link}`}><a onClick={onMenuClick}>{subMenuItem.name}</a></Link>
                                    ))}
                                </ul>
                                : ''}
                        </li>
                    ))}
                </div>
            </ul>
            <div onClick={onMenuClick} className={styles.hamburger} data-open={isOpen}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </nav>
    )
};

export default Navbar;