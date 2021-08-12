import React, {useState} from 'react';
import styles from './Nav.module.scss';
import Hamburger from 'hamburger-react';

function Nav() {
    const [isOpen, setOpen] = useState(false);

    const handleActive = () =>{
        setOpen(!isOpen);
    }

    return (
        <>
        <div className={isOpen ? styles.menuOpen : styles.slideMenu}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Work</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>

        <div className={styles.nav}>
            <div className={styles.logo}>
                <h2>A</h2>
            </div>
            <div className={styles.navElements}>
                <a href="#">Get in touch</a>
                <Hamburger color="#4FD1C5"  size={48} toggled={isOpen} toggle={setOpen} />
            </div>
        </div>
        </>
    )
}

export default Nav
