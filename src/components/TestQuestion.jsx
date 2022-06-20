import React from 'react'
import styles from '../styles/TestPage.module.css'
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri"

function TestQuestion({ question, answer, mark, editQuestionToggle, deleteQuestion, id }) {
    return (
        <div className={styles.question}>
            <div className={styles.qna} >
                <div className={styles.label}>
                    <p>
                        Question:
                    </p>
                    <p>
                        {question}
                    </p>
                </div>
                <div className={styles.answer}>
                    <p>
                        Answer:
                    </p>
                    <p>
                        {answer}
                    </p>
                </div>
                <div className={styles.answer}>
                    <p>
                        Marks:
                    </p>
                    <p>
                        {mark}
                    </p>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.delete} onClick={() => deleteQuestion(id)} > <RiDeleteBin6Line /> Delete</button>
                <button className={styles.edit} onClick={ () => editQuestionToggle(id) }><BiEdit />Edit</button>
            </div>
        </div>

    )
}

export default TestQuestion