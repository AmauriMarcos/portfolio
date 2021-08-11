import React from 'react';
import styles from './Nav.module.scss';

function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <h2>AS.</h2>
            </div>
            <ul className={styles.list}>
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
    )
}

export default Nav
