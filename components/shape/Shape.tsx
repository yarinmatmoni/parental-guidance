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
}: {
  height: number;
  width?: number;
  top: number | string;
  left: number | string;
  opacity: number;
  name: string;
}) {
  return (
    <div
      className={styles.container}
      style={{ top: top, left: left, opacity: opacity }}
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
}

export default Shape;
