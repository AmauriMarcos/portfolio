import React from "react";
import styles from "../styles/about.module.scss";
import Image from "next/image";
import profilePicture from "../public/assets/profilePicture.png";
import Skills from "../components/Skills/Skills";
import { md } from "../Utils/mediaQuery";
import { motion, transform } from "framer-motion";

function about() {
  return (
    <div className={styles.About}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
        className={styles.boxImage}
      >
        <Image
          className={styles.img}
          src={profilePicture}
          alt="Amauri Santos' Picture"
        />

        <div className={styles.boxSkills}>
          <h4>Skills</h4>
          <Skills />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: -800,
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
        <h3>
          &quot;Most everything that you want is just outside your comfort
          zone&quot; <br></br>- Jack Canfield
        </h3>
        <p>
          My name is Amauri Santos and I am a passionate front end developer
          based in Serbia. I am always looking for a good challenge. I enjoy
          making full applications with the MERN stack. I like to read, play
          video games, running and stay with my family.
        </p>
      </motion.div>
    </div>
  );
}

export default about;
