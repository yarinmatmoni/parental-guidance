import React from "react";
import Image from "next/image";
import logo1 from "../../public/logo/logo1.svg";
import logo2 from "../../public/logo/logo2.svg";
import styles from "./Logo.module.scss";
import { text } from "../../utils/content/common";

const Logo = ({
  height,
  width,
  withText,
}: {
  height: number;
  width: number;
  withText?: boolean;
}) => {
  return (
    <div className={styles.container}>
      <Image
        src={withText ? logo1 : logo2}
        height={height}
        width={width}
        alt={text.name}
      />
    </div>
  );
};

export default Logo;
