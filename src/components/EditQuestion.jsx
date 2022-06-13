import React from 'react'
import { BiEdit } from 'react-icons/bi'
import styles from "../styles/EditQuestion.module.css"

function EditQuestion() {
  return (
    <div>
            <h2>Edit Question</h2>
            <form className={styles.form}>
                <div className={styles.group}>
                    <label htmlFor="question">Question: </label>
                    <textarea type="text" id='question' className={styles.textarea} required />
                </div>
                <div className={styles.group}>
                    <label htmlFor="answer">Answer: </label>
                    <input type="text" id='answer' className={styles.input} required />
                </div>
                <div className={styles.group}>
                    <label htmlFor="mark">Mark: </label>
                    <input type="number" min="0" id='mark' className={styles.input} required />
                </div>
                <div className={styles.button}>
                    <button><BiEdit />Edit</button>
                </div>
            </form>
        </div>
  )
}

export default EditQuestion