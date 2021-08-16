import React, {useState} from 'react';
import styles from './Nav.module.scss';
import Hamburger from 'hamburger-react';
import Link from 'next/link';

function Nav() {
    const [isOpen, setOpen] = useState(false);

    const handleActive = () =>{
        setOpen(false);
    }

    return (
        <>
        <div className={isOpen ? styles.menuOpen : styles.slideMenu}>
            <ul>
                <li onClick={handleActive}>
                    <Link  href="/">Home</Link>
                </li>
                <li onClick={handleActive}>
                    <Link href="/about">About</Link>
                </li>
                <li onClick={handleActive}>
                    <Link href="/work">Work</Link>
                </li>
                <li onClick={handleActive}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>

        <div className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">A</Link>
            </div>
            <div className={styles.navElements}>
                <Link href="/contact">Get in touch</Link>
                <Hamburger color="#4FD1C5"  size={48} toggled={isOpen} toggle={setOpen} />
            </div>
        </div>
        </>
    )
}

export default Nav
