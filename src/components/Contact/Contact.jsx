import React from 'react'
import styles from './Contact.module.scss'
import { useState } from 'react'
import Submit from '../Submit/Submit'
import { useTranslation } from 'react-i18next'
function Contact() {
  const {t} = useTranslation('content')
    const [modal, setModal] = useState(false)

    const openModal = () =>{
      setModal(true)
    }
    const closeModal = () =>{
      setModal(false)
    }
    return(
        <div className={styles.contact}>
            <>
            <div className={styles.box}>
            
            <button onClick={openModal}>
            <img src="./images/callButton.svg" alt="callButton" />
               {t('supLast')} </button>
            </div>
            </>
            {
            modal && (
              <Submit closeModal={closeModal}  />
            )
          }
        </div>
    )
}
export default Contact