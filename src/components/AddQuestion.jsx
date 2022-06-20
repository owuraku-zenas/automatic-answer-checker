import React, { useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import styles from "../styles/EditQuestion.module.css"

function AddQuestion({ addQuestion, onClose }) {

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [mark, setMark] = useState(1)

    return (
        <div>
            <h2>Add Question</h2>
            <form className={styles.form}>
                <div className={styles.group}>
                    <label htmlFor="question">Question: </label>
                    <textarea
                        type="text"
                        id='question'
                        className={styles.textarea}
                        value={question}
                        onChange={
                            (event) => {
                                setQuestion(event.target.value)
                            }
                        }
                        required
                    />
                </div>
                <div className={styles.group}>
                    <label htmlFor="answer">Answer: </label>
                    <input
                        type="text"
                        id='answer'
                        className={styles.input}
                        value={answer}
                        onChange={
                            (event) => {
                                setAnswer(event.target.value)
                            }
                        }
                        required
                    />
                </div>
                <div className={styles.group}>
                    <label htmlFor="mark">Mark: </label>
                    <input
                        type="number"
                        min="0"
                        id='mark'
                        className={styles.input}
                        value={mark}
                        onChange={
                            (event) => {
                                setMark(event.target.value)
                            }
                        }
                        required
                    />
                </div>
                <div className={styles.button}>
                    <button
                    onClick={
                        (event) => {
                            event.preventDefault()
                            addQuestion(Date.now(), question, answer, mark)
                            onClose()
                        }
                    }
                    >
                        <BsFillPlusCircleFill />Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddQuestion