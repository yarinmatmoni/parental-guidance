import React from "react";
import Image from "next/image";
import logo from "../../public/logo/logo1.svg";
import styles from "./Logo.module.scss";
import { text } from "../../utils/content/common";

const Logo = ({ height, width }: { height: number; width: number }) => {
  return (
    <div className={styles.container}>
      <Image src={logo} height={height} width={width} alt={text.name} />
    </div>
  );
};

export default Logo;
