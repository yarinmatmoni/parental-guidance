import React from 'react';
import * as contact from '../../utils/content/common';
import styles from './Contact.module.scss';

function Contact() {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <h2>{contact.contact.title}</h2>
                </div>
                <div className={styles.details}>
                    <div className={styles.item}>
                        <p>052-8024230</p>
                    </div>
                    <div className={styles.item}>
                        <p>yarinmatmoni@gmail.com</p>
                    </div>
                    <div className={styles.item}>
                        <p>facebook</p>
                    </div>
                </div>
            </div>
            <div className={styles.contact}>
                <form>
                    {contact.contact.data.map((item, index) => {
                        return (
                            <input key={index} type="text" placeholder={item.name}></input>
                        )
                    })}
                </form>
            </div>
        </div>
    )
};

export default Contact;