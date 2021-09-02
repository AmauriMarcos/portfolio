import React, {useState, useEffect} from "react";
import { useMediaQuery } from "react-responsive";
import styles from "../styles/work.module.scss";
import Link from 'next/link';
import Image from "next/image";
import work1 from "../public/assets/work1.png";
import work2 from "../public/assets/work2.png";
import work3 from "../public/assets/work3.png";
import work3Dash from "../public/assets/work3Dash.png";
import { motion, transform } from "framer-motion";

const Work = () => {
  const md = useMediaQuery({ query: "(max-width: 768px)" });
 
  return (
    <div className={styles.Work}>
      <a target="_blank" href="https://dashfamily.netlify.app/" rel="Dashboard home page">
      <div className={styles.firstRow}>
        <div className={styles.boxImage}>
          <Image className={styles.img} src={work3} alt="KFE news" />
        </div>

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
            This is my favorite app so far. It was built with React, Node, mySQL, SCSS and 
            Firebase authentication. I&apos;ve decided to use mySQL rather than firestore just because I was confortable with my choice even if I had to generate a token in order to get the unique user identification. The UID was used as my unique ID in my User table. 
          </p>

          <p>
            The app has some libraries such as react-scroll, that I&apos;ve used to scroll to a specific section, you just need to wrap the component and match the name/id. It&apos;s easy and save you some time. Formik with Yup for form validation, Framer Motion to animate basic everything you want, React-Chart to display my data in a nice way. I&apos;ve used Cloudinary to store images because I want the user to be able to change its profile picture. 
          </p>
        </motion.div>
      </div>
      </a>

      {/*  {md && 
        <div className={styles.secondRow}>
          <div className={styles.boxImage}>
            <Image className={styles.img} src={work3Dash} alt="Front end Mentor" />
          </div>
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
   
           <p>
              Within the dashboard you can set as many goals as you wish, save money from your wallet and you can have a overview about all your transactions. To create a transaction is pretty straightforward. The user can choose its own categories and colors and decide if it is an income or an expense. 
            </p>

            <p>
               It was quite challenge for me because there were a lot of stuff going on.
               To organize everything I opted to use react context. So I have created two files inside my context folder. useDash and useAuth. The first one was created to handle all the logic and state and pass it through the components. The second one was created to handle everything related to authentication. 
            </p>
          </motion.div>
        </div>
      } */}

      {!md && (
        <a target="_blank" href="https://dashfamily.netlify.app/dashboard" rel="Dashboard page">
        <div className={styles.secondRow}>
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
           {/*  <h2>Loopstudios</h2> */}
           <p>
              Within the dashboard you can set as many goals as you wish, save money from your wallet and you can have a overview about all your transactions. To create a transaction is pretty straightforward. The user can choose its own categories and colors and decide if it is an income or an expense. 
            </p>

            <p>
               It was quite challenge for me because there were a lot of stuff going on.
               To organize everything I opted to use react context. So I have created two files inside my context folder. useDash and useAuth. The first one was created to handle all the logic and state and pass it through the components. The second one was created to handle everything related to authentication. 
            </p>
          </motion.div>
          <div className={styles.boxImage}>
            <Image className={styles.img} src={work3Dash} alt="Front end Mentor" />
          </div>
        </div>
        </a>
      )}

      {/* <div className={styles.thirdRow}>
        <div className={styles.boxImage}>
          <Image className={styles.img} src={work3Dash} alt="Dashshow" />
        </div>

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
     
          
          <p>
              Within the dashboard you can set as many goals as you wish, save money from your wallet and you can have a overview about all your transactions. To create a transaction is pretty straightforward. The user can choose its own categories and colors and decide if it is an income or an expense. 
            </p>

            <p>
               It was quite challenge for me because there were a lot of stuff going on.
               To organize everything I opted to use react context. So I have created two files inside my context folder. useDash and useAuth. The first one was created to handle all the logic and state and pass it through the components. The second one was created to handle everything related to authentication. 
            </p>
        </motion.div>
      </div> */}
    </div>
  );
};

export default Work;
