import React, { MouseEventHandler } from "react";
import styles from "./Hamburger.module.scss";

function Hamburger({
  onMenuClick,
  isOpen,
}: {
  onMenuClick: MouseEventHandler;
  isOpen: boolean;
}) {
  return (
    <div onClick={onMenuClick} className={styles.container} data-open={isOpen}>
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </div>
  );
}

export default Hamburger;
