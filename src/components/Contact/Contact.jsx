import React from 'react'
import styles from './Contact.module.scss'

function Contact() {
    return(
        <div className={styles.contact}>
            <>
            <div className={styles.box}>
            
            <button>
            <img src="./images/callButton.svg" alt="callButton" />
                Заказать обратный звонок эксперта</button>
            </div>
            </>
         
        </div>
    )
}
export default Contact