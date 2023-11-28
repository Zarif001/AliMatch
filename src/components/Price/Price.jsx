import React from "react";
import styles from "./Price.module.scss";

function Price() {
  return (
    <div className={styles.price}>
      <h2 className={styles.title}>Стоимость Ali match 999 USD</h2>
      <h5 className={styles.text}>В эту стоимость включено:</h5>

      <ul className={styles.list}>
        <li className={styles.link}>Одно интервью с <br />экспертом <span> Alibaba.com</span></li>
        <li className={styles.link}>Подбор поставщиков <br />специалистами <br /><span>Alibaba.com</span>  в <span>Китае</span></li>
        <li className={styles.link}>Подготовка технического <br />задания для подбора <br />поставщиков</li>
        <li className={styles.link}>Организация онлайн встреч</li>
      </ul>
    </div>
  );
}
export default Price;
