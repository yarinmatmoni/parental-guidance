import React from 'react';
import Image from 'next/image';
import styles from './InfoBox.module.scss';

function InfoBox({ logo, title, text }: any) {
    return (
        <div className={styles.infoBox}>
            <Image src={logo} height={10} width={10} alt=""></Image>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
};

export default InfoBox;