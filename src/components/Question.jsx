import React from 'react'
import styles from "../styles/QuestionsPage.module.css"

function Question( { question } ) {
    return (
        <div className={styles.question}>
            <label htmlFor="" className={styles.label}>
                {question}
            </label>
            {/* TODO Fix input focus border */}
            <input type="text" className={styles.input} />
        </div>
    )
}

export default Question