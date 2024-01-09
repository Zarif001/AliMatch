import React from "react";
import styles from "./Price.module.scss";
import { useTranslation } from "react-i18next";

function Price() {
  const {t, i18n} = useTranslation('content')
  const priceText2Ru = t('priceText2')
  const priceText2Uz = t('priceText2')
  const priceText3Uz = t('priceText3')
  const priceText3Ru = t('priceText3')
  return (
    <div className={styles.price}>
      <h2 className={styles.title}>{t('priceTitle')}</h2>
      <h5 className={styles.text}>{t('priceText')}</h5>

      <ul className={styles.list}>
        <li className={styles.link}>{i18n.language === 'uz' ? (
          <>
          <span>Alibaba.com</span>
          {priceText2Uz}
          </>
        ): 
        <>
        {priceText2Ru}
        <span>Alibaba.com</span>
        </>
      }</li>
        <li className={styles.link}>
          {i18n.language === 'uz' ? (
            <>
            <span>Alibaba.com</span>
            {priceText3Uz}
            </>
          ):
          <>
          {priceText3Ru} <span>Alibaba.com</span> в Китае
          </>
          }
        </li>
        <li className={styles.link}>{t('priceText4')}</li>
        <li className={styles.link}>{t('priceText5')}</li>
      </ul>
    </div>
  );
}
export default Price;
