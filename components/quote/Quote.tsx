import React from 'react';
import styles from './Quote.module.scss';

function Quote({ data }: any) {
    return (
        <div className={styles.quoteContainer}>
            <blockquote>{data.quote}</blockquote>
            <small>{data.name}</small>
        </div>
    )
};

export default Quote;