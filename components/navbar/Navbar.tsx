import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import * as Content from "../../utils/content/common";
import styles from "./Navbar.module.scss";
import Logo from "../logo/Logo";
import Hamburger from "../hamburger/Hamburger";

function Navbar() {
  const refMenuContainer = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        refMenuContainer.current &&
        !refMenuContainer.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={refMenuContainer} className={styles.navMenuContainer}>
      <Logo height={75} width={75} />
      <ul className={styles.menuContainer} data-open={isOpen}>
        <>
          {Content.nav?.map((menuItem, i) => (
            <li key={i} className={styles.menuItem} data-path={router.pathname === menuItem.link ? true : false}>
              {menuItem.sub.length > 0 ? (
                <>
                  {menuItem.name}
                  <ul className={styles.subMenu} data-open={isOpen}>
                    {menuItem.sub.map((subMenuItem, i) => (
                      <li key={i} className={styles.menuItem}>
                        <Link
                          className={styles.link}
                          href={`${subMenuItem.link}`}
                        >
                          <a onClick={onMenuClick}>{subMenuItem.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={`${menuItem.link}`}>
                  <a onClick={onMenuClick}>{menuItem.name}</a>
                </Link>
              )}
            </li>
          ))}
        </>
      </ul>
      <Hamburger onMenuClick={onMenuClick} isOpen={isOpen} />
    </nav>
  );
}

export default Navbar;
