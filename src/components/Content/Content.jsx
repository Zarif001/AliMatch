import React from "react";
import styles from './Content.module.scss'

function Content() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Ali Match</h1>
      <div className={styles.items}>
        <p className={styles.describe}>
          Доверьте поиск <br /> и подбор надежных <br /> поставщиков из Китая <br /> команде
          <span> Alibaba.com </span>
        </p>
        <div>
        <div className={styles.picture}>
          <div>
            <img className={styles.spiker} src="./images/spiker.webp" alt="spiker" />
          </div>
          <div>
            <img className={styles.play} src="./images/tick.webp" alt="tick" />
          </div>
        </div>
        <button>Узнать больше о Ali Match</button>
        </div>
        
      </div>
    </div>
  );
}
export default Content;
