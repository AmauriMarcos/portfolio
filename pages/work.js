import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "../styles/work.module.scss";
import Link from "next/link";
import Image from "next/image";
import idiomasImg from "../public/assets/idiomasImg.png";
import dashboardImg from "../public/assets/dashboardImg.png";
import { motion, transform } from "framer-motion";
import SkillItem from "../components/Skills/SkillItem/SkillItem";

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
            <Image className={styles.img} src={dashboardImg} alt="Dashboard" />
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
              I&apos;ve created this app to help others to organize their
              personal finances. You can create your own account or you can use
              the test credential below to see how everything works.
            </p>
            <div className={styles.credentials}>
              <p>
                <span>username:</span> test@test.com
              </p>
              <p>
                <span>password:</span> 123456
              </p>
            </div>

            <div className={styles.wrapperCredentials}>
              <SkillItem className={styles.item} skill="React" />
              <SkillItem className={styles.item} skill="Node.js" />
              <SkillItem className={styles.item} skill="SCSS" />
              <SkillItem className={styles.item} skill="mySQL" />
              <SkillItem className={styles.item} skill="Heroku" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <a
          target="_blank"
          href="https://idiomas-site.vercel.app/ "
          rel="noreferrer"
        >
          <div className={styles.boxImage}>
            <Image className={styles.img} src={idiomasImg} alt="Idiomas Site" />
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
            <h2>Hicham Idiomas</h2>
            <p>
              It was a such good experience building this site with Next.js. I thought that the site needed an update so I re-designed it. I wanted to apply light palletes of colors and keep it simple. 
            </p>
            <div className={styles.wrapperCredentials}>
              <SkillItem className={styles.item} skill="Next.js" />
              <SkillItem className={styles.item} skill="SCSS" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
