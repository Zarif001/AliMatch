import React from "react";
import styles from "./Advantages.module.scss";
import { useTranslation } from "react-i18next";

function Advantages() {
  const {t} = useTranslation('content')
  return (
    <div className={styles.advantages}>
      <h2 className={styles.title}>{t('advantageTitle')}</h2>
      <div className={styles.box}>
        <div className={styles.items}>
          <div className={styles.item}>
            <p>.</p>
          </div>
          <div className={styles.item}>
            <p>{t('advantageText')}</p>
          </div>
          <div className={styles.item}>
            <p>{t('advantageText2')}</p>
          </div>
          <div className={styles.item}>
            <p>{t('advantageText3')}</p>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <p className={styles.span}>Alibaba.com</p>
          </div>
          <div className={styles.item}>
            <p>{t('advantageText4')}</p>
          </div>
          <div className={styles.item}>
            <p>999 USD</p>
          </div>
          <div className={styles.item}>
            <p>{t('advantageText5')}</p>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <p className={styles.span}>{t('advantageTex6')}</p>
          </div>
          <div className={styles.item}>
            <p>20-50</p>
          </div>
          <div className={styles.item}>
            <p>{t('advantageText7')}</p>
          </div>
          <div className={styles.item}>
            <p>{t('advantageText8')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Advantages;
