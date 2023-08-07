import React from "react";
import Image from "next/image";
import styles from "./Shape.module.scss";

const Shape = ({
  height,
  width,
  top,
  left,
  opacity,
  name,
  rotate,
  onlyDesktop,
}: {
  height: number;
  width?: number;
  top: number | string;
  left: number | string;
  opacity?: number;
  name: string;
  rotate?: number;
  onlyDesktop?: boolean;
}) => {
  return (
    <div
      className={styles.container}
      style={{
        top: top,
        left: left,
        opacity: opacity || 0.15,
        rotate: `${rotate}deg`,
      }}
    >
      <Image
        src={`/svgs/` + name + ".svg"}
        alt={name}
        height={height}
        width={width || height}
        className={styles.shape}
      />
    </div>
  );
};

export default Shape;
