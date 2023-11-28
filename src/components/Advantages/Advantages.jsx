import React from "react";
import styles from "./Advantages.module.scss";

function Advantages() {
  return (
    <div className={styles.advantages}>
      <h2 className={styles.title}>Преимущества Ali match</h2>
      <div className={styles.box}>
        <div className={styles.items}>
          <div className={styles.item}>
            <p>.</p>
          </div>
          <div className={styles.item}>
            <p>База активных поставщиков</p>
          </div>
          <div className={styles.item}>
            <p>Стоимость услуги</p>
          </div>
          <div className={styles.item}>
            <p>Ресурсы</p>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <p className={styles.span}>Alibaba.com</p>
          </div>
          <div className={styles.item}>
            <p>Более 280 000</p>
          </div>
          <div className={styles.item}>
            <p>999 USD</p>
          </div>
          <div className={styles.item}>
            <p>Офисы по всему Китаю</p>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <p className={styles.span}>Агент по закупкам</p>
          </div>
          <div className={styles.item}>
            <p>20-50</p>
          </div>
          <div className={styles.item}>
            <p>Комиссия от цены закупки</p>
          </div>
          <div className={styles.item}>
            <p>Команда 1-5 человек</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Advantages;
