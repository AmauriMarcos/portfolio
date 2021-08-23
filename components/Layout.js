import styles from "./Layout.module.scss";
import Nav from "./Nav/Nav";
import Home from "../pages";
import Image from "next/image";
import circlesDetail from "../public/assets/circlesDetail.png";
import { motion } from 'framer-motion';

/* import Work from "../pages/work"; */

function Layout({ children }) {
  return (
    <>
      <p className={styles.top}>AS.Front-End/2021</p>
      <p className={styles.right}>AS.Front-End/2021</p>
      <p className={styles.bottom}>AS.Front-End/2021</p>
      <p className={styles.left}>AS.Front-End/2021</p>

      <div className={styles.circleTopLeft}>
        <Image
          src={circlesDetail}
          alt="circle detail at the top right corner"
        />
      </div>

      <div className={styles.circleTopRight}>
        <Image
          src={circlesDetail}
          alt="circle detail at the top right corner"
        />
      </div>

      <div className={styles.circleBottomLeft}>
        <Image
          src={circlesDetail}
          alt="circle detail at the top right corner"
        />
      </div>

      <div className={styles.circleBottomRight}>
        <Image
          src={circlesDetail}
          alt="circle detail at the top right corner"
        />
      </div>

      <div className={styles.container}>
        <Nav />

        <main>
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
