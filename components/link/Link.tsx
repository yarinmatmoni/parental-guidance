import React from 'react';
import Image from "next/image";

function Link({ href, text, src, size, alt }: { href: string, text?: string, src: string, size?: number, alt?: string }) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            {text !== undefined ? text : <Image src={src} height={size} width={size} alt={alt}></Image>}
        </a>
    )
};

export default Link;