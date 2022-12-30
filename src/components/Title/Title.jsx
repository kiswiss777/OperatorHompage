import React from "react";
import styles from "./Title.module.css"

const Title = () => {
  return <header className={styles.titleStyle}>
    <div className={styles.leftTitle}>
      <img id="lefticon" width="50" src="list.png">
      </img>
      <h1 className={styles.titleFont}>
        연세미소온치과
      </h1>
    </div>
    <div>
      <a href="" className={styles.logout}>
        로그아웃
      </a>
    </div>
  </header>
}

export default Title;