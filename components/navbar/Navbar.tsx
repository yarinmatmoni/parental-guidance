import React, { useRef, useState } from "react";
import Link from "next/link";
import * as Content from "../../utils/content/common";
import styles from "./Navbar.module.scss";
import Logo from "../logo/Logo";
import Hamburger from "../navbar/hamburger/Hamburger";
import useOnclickOutside from "../../utils/hooks/useOnclickOutside";
import { useScrollLock } from "../../utils/hooks/useLockScroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const refMenuContainer: any = useRef();
  useOnclickOutside(refMenuContainer, () => setIsOpen(false));
  useScrollLock(isOpen);

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={refMenuContainer} className={styles.navMenuContainer}>
      <Logo height={65} width={65} />
      <ul className={styles.menuContainer} data-open={isOpen}>
        <>
          {Content.nav?.map((menuItem, i) => (
            <li key={i} className={styles.menuItem}>
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
