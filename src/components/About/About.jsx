import React from "react";
import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>
        Ali Match – это услуга по поиску и отбору поставщиков в{" "}
        <span>Китае</span>
      </h2>
      <p className={styles.describe}>
        Специалисты <span>Alibaba.com</span> подбирают поставщиков, которыe{" "}
        <br />
        максимально соответствуют требования и критериям покупателей
      </p>

      <div className={styles.aboutBg}>
        <h3>Эта услуга для вас, если</h3>
        <div className={styles.boxex}>
          <div className={styles.box}>
            <p className={styles.text}>
              Нет опыта по <br />
              поиску и отбору <br /> поставщиков <br /> из Китая
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.text}>
              Не хватает <br />
              времени на поиск <br />
              поставщиков в <br />
              интернете или <br />
              на выставках
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.text}  >
              Нужно найти <br />
              поставщика, который <br />
              соответствует <br />
              специфическим <br />
              требованиям <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
