import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import fingerPrintImg from '../../public/assets/fingerPrintImage.png'

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <div className={styles.heroCard}>
                <div className={styles.content}>
                    <h2>Get to know my</h2>
                    <h1>Work</h1>
                </div>
                <div className={styles.description}>
                    <Image src={fingerPrintImg} alt="Finger print"/>
                    <div className={styles.textColumn}>
                        <p>Web Developer</p>
                        <p>Based in Serbia</p>
                        <p>Enthusiastic front-end developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
