import React from 'react'
import styles from './Form.module.scss';

const Form = () => {
    return (
        <div className={styles.Form}>
            <div className={styles.boxInput}>
                <label for="fullName">Full name</label>
                <input type="text" name="fullName" id="fullName"/>
            </div>

            <div className={styles.boxInput}>
                <label for="email">Email</label>
                <input type="email" id="email" name="email"/>
            </div>

            <div className={styles.boxInput}>
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject"/>
            </div>

            <div className={styles.boxInput}>
                <label for="message">Message</label>
                <textarea type="text" id="message" name="message"/>
            </div>
            <button>Send</button>
        </div>
    )
}

export default Form
