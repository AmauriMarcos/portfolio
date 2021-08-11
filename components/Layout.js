import styles from "./Layout.module.scss";
/* import Nav from './Nav/Nav'; */
import Hero from "./Hero/Hero";

function Layout({ children }) {
  return (
    <>
      {/*   <Nav/> */}
      <p className={styles.top}>AS.Front-End/2021</p>
      <p className={styles.right}>AS.Front-End/2021</p>
      <p className={styles.bottom}>AS.Front-End/2021</p>
      <p className={styles.left}>AS.Front-End/2021</p>
      <div className={styles.container}>
        <Hero />
      </div>
    </>
  );
}

export default Layout;
