import React from 'react';
import Image from 'next/image';
import styles from './DesignParagraph.module.scss';
import { useScroll } from '../../utils/useScroll';
import { motion } from 'framer-motion';
import * as Animation from '../../utils/animation/animation';

function DesignParagraph({ data }: any) {

    const [element, controls]: any = useScroll();

    return (
        <motion.div className={styles.paragraphContainer} variants={data.animation === 'left' ? Animation.leftFadeIn : Animation.rightFadeIn} ref={element} animate={controls} initial='hidden'>
            <div className={styles.paragraph}>
                <p>{data.paragraph}</p>
            </div>
            <div>
                <Image src={data.icon} height={50} width={50} alt={data.alt}></Image>
            </div>
        </motion.div>
    )
};

export default DesignParagraph;