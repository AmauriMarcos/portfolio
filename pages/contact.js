import React from 'react';
import styles from '../styles/contact.module.scss';
import ContactForm from '../components/Form/Form';

function contact() {
    return (
        <div className={styles.contact}>
            <div className={styles.description}>   
                <h2>I am here to help. <br></br>Let&apos;s talk.</h2> 
                <div className={styles.info}>
                    <div className={styles.emailAndPhone}>
                        <h3>Email:</h3>
                        <p>amaurisantos@gmail.com</p>
                    </div>
                    <div className={styles.emailAndPhone}>
                        <h3>Phone:</h3>
                        <p>+063 394 939 420</p>
                    </div>
                </div>    
            </div>  

            <div className={styles.form}>
                <ContactForm/>
            </div>     
        </div>
    )
}

export default contact
