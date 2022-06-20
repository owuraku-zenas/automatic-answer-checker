import React, { useState } from 'react'
import styles from "../styles/QuestionsPage.module.css"

function Question({ question, id, updateAnswers }) {
    const [answer, setAnswer] = useState(null)
    return (
        <div className={styles.question}>
            <label htmlFor={id} className={styles.label}>
                {question}
            </label>
            {/* TODO Fix input focus border */}
            <input
                type="text"
                id={id}
                className={styles.input}
                value={answer || ""}
                onChange = {
                    (event) => {
                        setAnswer(event.target.value)
                    }
                }
                onBlur={
                    () => {
                        updateAnswers(id, answer)
                    }
                }
                required
            />
        </div>
    )
}

export default Question