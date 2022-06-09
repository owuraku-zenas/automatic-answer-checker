import React from 'react'
import styles from "../styles/QuestionsPage.module.css"



function QuestionsPage() {
    return (
        <div className={styles.questions__area}>
            <div className={styles.questions}>
                <header>
                    <h1>Attempt All Questions</h1>
                </header>
                <form action="">
                    <div className={styles.question}>
                        <label htmlFor="" className={styles.label}>
                            What is the name of the tallest tower in the world
                        </label>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.question}>
                        <label htmlFor="" className={styles.label}>
                            What is the name of the tallest tower in the world
                        </label>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.question}>
                        <label htmlFor="" className={styles.label}>
                            What is the name of the tallest tower in the world
                        </label>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.question}>
                        <label htmlFor="" className={styles.label}>
                            What is the name of the tallest tower in the world
                        </label>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.question}>
                        <label htmlFor="" className={styles.label}>
                            What is the name of the tallest tower in the world
                        </label>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.question}>
                        <label htmlFor="" className={styles.label}>
                            What is the name of the tallest tower in the world
                        </label>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.clear}>Clear Form</button>
                        <input type="submit" name="" id="" className={styles.submit__button} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default QuestionsPage