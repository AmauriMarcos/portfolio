import React from "react";
import styles from "../styles/home.module.scss";
import Image from "next/image";
import fingerPrintImg from "../public/assets/fingerPrintImage.png";
import { motion, transform } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className={styles.Hero}>
        <motion.div
          initial="hidden"
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
                delay: 0.6,
              },
            },
          }}
          className={styles.heroCard}
        >
          <div className={styles.content}>
            <h2>Get to know my</h2>
            <h1>Work</h1>
          </div>
          <div className={styles.description}>
            <Image src={fingerPrintImg} alt="Finger print" />
            <div className={styles.textColumn}>
              <p>Web Developer</p>
              <p>Based in Serbia</p>
              <p>Enthusiastic front-end developer</p>
            </div>
          </div>
        </motion.div>
      </div>

      <video className={styles.video} autoPlay loop muted>
        <source src="/assets/smokeVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
}
