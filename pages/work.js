import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "../styles/work.module.scss";
import Link from "next/link";
import Image from "next/image";
import work1 from "../public/assets/work1.png";
import work2 from "../public/assets/work2.png";
import work3 from "../public/assets/work3.png";
import work3Dash from "../public/assets/work3Dash.png";
import { motion, transform } from "framer-motion";
import Nav from "../components/Nav/Nav";

const Work = () => {
  const md = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.Work}>
      <div className={styles.wrapper}>
        <a
          target="_blank"
          href="https://dashfamily.netlify.app/"
          rel="noreferrer"
        >

          <div className={styles.boxImage}>
            <Image className={styles.img} src={work3} alt="KFE news" />
          </div>
        
        </a>
        <div className={styles.info}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                y: -500,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
            className={styles.description}
          >
            <h2>Personal Financial Dashboard</h2>
            <p>
              This is my favorite app so far. It was built with React, Node,
              mySQL, SCSS and Firebase authentication. I&apos;ve decided to use
              mySQL rather than firestore just because I was confortable with my
              choice even if I had to generate a token in order to get the
              unique user identification. The UID was used as my unique ID in my
              User table.
            </p>
          </motion.div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <a
          target="_blank"
          href="https://dashfamily.netlify.app/"
          rel="noreferrer"
        >
          
          <div className={styles.boxImage}>
            <Image className={styles.img} src={work3} alt="KFE news" />
          </div>
     
        </a>
        <div className={styles.info}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                y: -500,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
            className={styles.description}
          >
            <h2>Personal Financial Dashboard</h2>
            <p>
              This is my favorite app so far. It was built with React, Node,
              mySQL, SCSS and Firebase authentication. I&apos;ve decided to use
              mySQL rather than firestore just because I was confortable with my
              choice even if I had to generate a token in order to get the
              unique user identification. The UID was used as my unique ID in my
              User table.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
