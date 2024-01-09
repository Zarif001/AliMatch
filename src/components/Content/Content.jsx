import React from "react";
import styles from "./Content.module.scss";
import { useTranslation } from "react-i18next";

function Content() {
  const { t, i18n } = useTranslation("content");
  const capTitleUz = t("contTitle");
  const capTitleRu = t("contTitle");
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Ali Match</h1>
      <div className={styles.items}>
        <p className={styles.describe}>
          {i18n.language === "uz" ? (
            <>
              <span> Alibaba.com </span>
              {capTitleUz}
            </>
          ) : (
            <>
              {capTitleRu}
              <span> Alibaba.com </span>
            </>
          )}
        </p>
        <div>
          <div className={styles.picture}>
            <div>
              <img
                className={styles.spiker}
                src="./images/spiker.webp"
                alt="spiker"
              />
            </div>
            <div>
              <img
                className={styles.play}
                src="./images/tick.webp"
                alt="tick"
              />
            </div>
          </div>
          <button>{t('contButton')}</button>
        </div>
      </div>
    </div>
  );
}
export default Content;
