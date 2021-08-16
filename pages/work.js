import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "../styles/work.module.scss";
import Image from "next/image";
import work1 from "../public/assets/work1.png";
import work2 from "../public/assets/work2.png";
import work3 from "../public/assets/work3.png";

const Work = () => {
  const md = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.Work}>
      <div className={styles.firstRow}>
        <div className={styles.boxImage}>
          <Image className={styles.img} src={work1} alt="KFE news" />
        </div>

        <div className={styles.description}>
          <h2>KFÉ News</h2>
          <p>
            My name is Amauri Santos and I am a passionate front end developer
            based in Serbia. I am always looking for a good challenge. I enjoy
            making full applications with the MERN stack. I like to read, play
            video games, running and stay with my family.
          </p>
        </div>
      </div>

        {md && <div className={styles.secondRow}>
            <div className={styles.boxImage}>
              <Image
                className={styles.img}
                src={work2}
                alt="Front end Mentor"
              />
            </div>
            <div className={styles.description}>
              <h2>Loopstudios</h2>
              <p>
                My name is Amauri Santos and I am a passionate front end
                developer based in Serbia. I am always looking for a good
                challenge. I enjoy making full applications with the MERN stack.
                I like to read, play video games, running and stay with my
                family.
              </p>
            </div>
          </div>}
         
          {!md && <div className={styles.secondRow}>
            <div className={styles.description}>
              <h2>Loopstudios</h2>
              <p>
                My name is Amauri Santos and I am a passionate front end
                developer based in Serbia. I am always looking for a good
                challenge. I enjoy making full applications with the MERN stack.
                I like to read, play video games, running and stay with my
                family.
              </p>
            </div>
            <div className={styles.boxImage}>
              <Image
                className={styles.img}
                src={work2}
                alt="Front end Mentor"
              />
            </div>
          </div>}
        
   

      <div className={styles.thirdRow}>
        <div className={styles.boxImage}>
          <Image className={styles.img} src={work3} alt="Dashshow" />
        </div>

        <div className={styles.description}>
          <h2>Dash Show</h2>
          <p>
            My name is Amauri Santos and I am a passionate front end developer
            based in Serbia. I am always looking for a good challenge. I enjoy
            making full applications with the MERN stack. I like to read, play
            video games, running and stay with my family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
