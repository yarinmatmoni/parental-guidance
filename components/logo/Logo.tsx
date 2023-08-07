import React from "react";
import Image from "next/image";
import logo from "../../public/logo/logo1.svg";
import styles from "./Logo.module.scss";

const Logo = ({ height, width }: { height: number; width: number }) => {
  return (
    <div className={styles.container}>
      <Image src={logo} height={height} width={width} alt="logo" />
    </div>
  );
};

export default Logo;
