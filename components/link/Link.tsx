import React from "react";
import Image from "next/image";

const Link = ({
  href,
  text,
  src,
  size,
  alt,
  tab,
}: {
  href: string;
  text?: string;
  src?: string;
  size?: number;
  alt?: string;
  tab?: boolean;
}) => {
  return (
    <a href={href} target={tab ? "_blank" : ""} rel="noreferrer">
      {text !== undefined ? (
        text
      ) : (
        <Image src={src!} height={size} width={size} alt={alt || text}></Image>
      )}
    </a>
  );
};

export default Link;
