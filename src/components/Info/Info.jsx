import React from "react";
import styles from "./Info.module.scss";
import { useTranslation } from "react-i18next";
function Info() {
  const {t} = useTranslation('content')
  return (
    <div className={styles.info}>
      <h2 className={styles.title}>{t('infoTitle')}</h2>
      <div className={styles.box}>
      <div className={styles.items}>
        <div className={styles.titleBox}>
          <h4>{t('infoCap')}</h4>
        </div>
        <div className={styles.describeBox}>
          <p>
          {t('infoText')}
          </p>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.titleBox}>
          <h4>{t('infoCap2')}</h4>
        </div>
        <div className={styles.describeBox}>
          <p>
         {t('infoText2')}
          </p>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.titleBox}>
          <h4>{t('infoCap3')}</h4>
        </div>
        <div className={styles.describeBox}>
          <p>
         {t('infoText3')}
          </p>
        </div>
      </div>
      </div>

    </div>
  );
}
export default Info;
