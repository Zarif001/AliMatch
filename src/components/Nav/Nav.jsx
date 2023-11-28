import React from 'react'
import styles from './Nav.module.scss'

function Nav() {
    return(
        <div className={styles.nav}>
            <div className={styles.navBox}>
                <img className={styles.img} src="./images/logo.png" alt="logo" loading="lazy"/>
                <div className={styles.line}></div>
                <ul className={styles.links}>
                    <li>Global</li>
                    <li>Service</li>   
                    <li>Parther</li>
                </ul>
                <div className={styles.line}></div>
                <img className={styles.img} src="./images/logo2.png" alt="logo2" loading="lazy"/>
            </div>

        </div>
    );
};

export default Nav