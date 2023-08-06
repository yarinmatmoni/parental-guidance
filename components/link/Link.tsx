import React from "react";
import Image from "next/image";

function Link({
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
}) {
  return (
    <a href={href} target={tab ? "_blank" : ""} rel="noreferrer">
      {text !== undefined ? (
        text
      ) : (
        <Image src={src!} height={size} width={size} alt={alt}></Image>
      )}
    </a>
  );
}

export default Link;
