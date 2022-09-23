import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';

function Carousel({ data }: any) {

    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        let current = 1;
        const cycleReviews = () => {
            if (current === data.length) {
                current = 1;
            } else {
                current += 1;
            }
            setActiveSlide(current);
        };

        const intervalId = setInterval(() => {
            cycleReviews();
        }, 15000);

        return () => clearInterval(intervalId);

    }, [data.length]);

    return (
        <div className={styles.carousel}>
            <ul className={styles.carouselList}>
                {data && data.map((review: any, index: number) => {
                    return (
                        <li key={index + 1} className={`${styles.carouselItem} ${index + 1 === activeSlide ? styles.active : ""}
                            ${index + 1 < activeSlide ? styles.right : ""}
                            ${index + 1 > activeSlide ? styles.left : ""}`}>
                            <blockquote className={styles.carouselQuote}>
                                <p>{review.quote}</p>
                                <h4>{review.name}</h4>
                            </blockquote>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
};

export default Carousel;