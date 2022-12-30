import React from "react";
import styles from "./SubTitle.module.css"

const SubTitle = () => {
  return <header className={styles.titleStyle}>
    <div className={styles.leftTitle}>
      <img id="lefticon" width="50" src="list.png">
      </img>
      <h1 className={styles.subTitleFont}>
        신청자관리
      </h1>
    </div>
    <div>
      <a href="" className={styles.csvDownload}>
        CSV 다운로드
      </a>
    </div>
  </header>
}

export default SubTitle;