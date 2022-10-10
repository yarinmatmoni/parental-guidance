import React from "react";
import styles from "./Header.module.scss";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
}

export default Header;
