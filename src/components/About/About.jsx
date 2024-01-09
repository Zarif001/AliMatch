import React from "react";
import styles from "./About.module.scss";
import { useTranslation } from "react-i18next";

function About() {
  const {t, i18n} = useTranslation('content')
  const aboutTitleUz = t('aboutTitle')
  const aboutSTitleUz = t('aboutTitle2')
  const aboutTitleRU = t('aboutTitle')
  const aboutDescribeRU = t('aboutDescribe')
  const aboutDescribeUZ = t('aboutDescribe')
  const aboutDescribe2RU= t('aboutDescribe2')
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>
      {
        i18n.language === "uz" ? (
         <>
          {aboutTitleUz}
          <span>Xitoydagi</span>
          {aboutSTitleUz} 

         </>
        ) : (
          <>
          {aboutTitleRU}
          <span>Китае</span>
          </>
        )
      }
      </h2>
      <p className={styles.describe}>
        {
          i18n.language === 'uz' ? (
            <>
            <span>Alibaba.com</span>
            {aboutDescribeUZ}
            </>
          ): (
            <>
            {aboutDescribeRU} <span>Alibaba.com</span> {aboutDescribe2RU}
            </>
          )
        }
      </p>

      <div className={styles.aboutBg}>
        <h3>{t('aboutTitleBg')}</h3>
        <div className={styles.boxex}>
          <div className={styles.box}>
            <p className={styles.text}>
              {t('aboutText')}
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.text}>
           {t('aboutText2')}
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.text}  >
            {t('aboutText3')}

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
