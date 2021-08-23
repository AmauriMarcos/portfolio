import React from 'react';
import styles from '../styles/contact.module.scss';
import ContactForm from '../components/Form/Form';
import { motion, transform } from "framer-motion";

function contact() {
    return (
        <div className={styles.contact}>
            <motion.div initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            x: -300,
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }} className={styles.description}>   
                <h2>Let&apos;s talk.<br></br>I am here to help. </h2> 
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
            </motion.div>  

            <motion.div initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: 600,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}  className={styles.form}>
                <ContactForm/>
            </motion.div>     
        </div>
    )
}

export default contact
