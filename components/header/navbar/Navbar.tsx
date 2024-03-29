import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { nav } from "../../../utils/content/common";
import styles from "./Navbar.module.scss";
import Logo from "../../logo/Logo";
import Hamburger from "./hamburger/Hamburger";
import useOnclickOutside from "../../../utils/hooks/useOnclickOutside";
import { useScrollLock } from "../../../utils/hooks/useLockScroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const refMenuContainer: any = useRef();
  useOnclickOutside(refMenuContainer, () => setIsOpen(false));
  useScrollLock(isOpen);
  const router = useRouter();

  const onMenuClick = (forceClose?: boolean) => {
    setIsOpen(!isOpen && !forceClose);
  };

  return (
    <nav ref={refMenuContainer} className={styles.navMenuContainer}>
      <Logo height={72} width={72} />
      <ul className={styles.menuContainer} data-open={isOpen}>
        <>
          {nav
            .filter((menuItem) => menuItem.hidden !== true)
            ?.map((menuItem, i) => (
              <li
                key={i}
                className={styles.menuItem}
                data-path={decodeURI(router.asPath) === menuItem.link}
              >
                {menuItem.sub.length > 0 ? (
                  <>
                    {menuItem.name}
                    <ul className={styles.subMenu} data-open={isOpen}>
                      {menuItem.sub.map((subMenuItem, i) => (
                        <li
                          key={i}
                          className={styles.menuItem}
                          data-path={
                            decodeURI(router.asPath) === subMenuItem.link
                          }
                        >
                          <Link
                            className={styles.link}
                            href={`${subMenuItem.link}`}
                          >
                            <a
                              onClick={() => onMenuClick(true)}
                              title={subMenuItem.name}
                            >
                              {subMenuItem.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={`${menuItem.link}`}>
                    <a onClick={() => onMenuClick(true)} title={menuItem.name}>
                      {menuItem.name}
                    </a>
                  </Link>
                )}
              </li>
            ))}
        </>
      </ul>
      <Hamburger onMenuClick={() => onMenuClick()} isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
