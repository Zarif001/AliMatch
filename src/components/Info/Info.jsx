import React from "react";
import styles from "./Info.module.scss";

function Info() {
  return (
    <div className={styles.info}>
      <h2 className={styles.title}>Как это работает</h2>
      <div className={styles.box}>
      <div className={styles.items}>
        <div className={styles.titleBox}>
          <h4>Общение с экспертом Alibaba.com</h4>
        </div>
        <div className={styles.describeBox}>
          <p>
            Уделите 30-50 минут тому, чтобы рассказать о своем бизнесе и
            потребностях в поиске поставщиков нашему русскоговорящему эксперту.
            На основе этой информации эксперт Alibaba.com подготовит техническое
            задание для подбора поставщиков
          </p>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.titleBox}>
          <h4>Общение с экспертом Alibaba.com</h4>
        </div>
        <div className={styles.describeBox}>
          <p>
            Уделите 30-50 минут тому, чтобы рассказать о своем бизнесе и
            потребностях в поиске поставщиков нашему русскоговорящему эксперту.
            На основе этой информации эксперт Alibaba.com подготовит техническое
            задание для подбора поставщиков
          </p>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.titleBox}>
          <h4>Общение с экспертом Alibaba.com</h4>
        </div>
        <div className={styles.describeBox}>
          <p>
            Уделите 30-50 минут тому, чтобы рассказать о своем бизнесе и
            потребностях в поиске поставщиков нашему русскоговорящему эксперту.
            На основе этой информации эксперт Alibaba.com подготовит техническое
            задание для подбора поставщиков
          </p>
        </div>
      </div>
      </div>

    </div>
  );
}
export default Info;
