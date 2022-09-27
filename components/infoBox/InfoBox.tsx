import React from 'react';
import Image from 'next/image';
import styles from './InfoBox.module.scss';

function InfoBox({ logo, title, text, alt }: any) {
    return (
        <div className={styles.infoBox}>
            <Image src={logo} height={40} width={40} alt={alt}></Image>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
};

export default InfoBox;