import React from "react";
import Image from "next/image";
import styles from "./Shape.module.scss";

function Shape({
  height,
  width,
  top,
  left,
  opacity,
  name,
  rotate,
}: {
  height: number;
  width?: number;
  top: number | string;
  left: number | string;
  opacity: number;
  name: string;
  rotate?: number;
}) {
  return (
    <div
      className={styles.container}
      style={{ top: top, left: left, opacity: opacity, rotate: `${rotate}deg` }}
    >
      <Image
        src={`/svgs/` + name + ".svg"}
        alt={name}
        height={height}
        width={width || height}
        className={styles.shape}
        priority
      />
    </div>
  );
}

export default Shape;
