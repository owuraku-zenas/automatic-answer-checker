import React from 'react'
import styles from "../styles/ScorePage.module.css"

function ScorePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.conainer}>
        <div className={styles.results__area}>
          <div className={styles.header}>
            <h2>Automatic Answer Checker</h2>
          </div>
          <div className={styles.results}>
            <div className={styles.score}>92%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScorePage