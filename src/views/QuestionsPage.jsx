import React from 'react'
import Questions from '../components/Question'
import styles from "../styles/QuestionsPage.module.css"



function QuestionsPage() {
    return (
        <div className={styles.questions__area}>
            <div className={styles.questions}>
                <header>
                    <h1>Attempt All Questions</h1>
                </header>
                <form action="">
                    <Questions question={"This Question 1"}/>
                    <Questions question={"This Question 2"}/>
                    <Questions question={"This Question 3"}/>
                    <Questions question={"This  Question 4"}/>
                    <Questions question={"This  Question 5"}/>
                    <Questions question={"This  Question 6"}/>
                    <Questions question={"This  Question 7"}/>
                    <div className={styles.buttons}>
                        {/* TODO Clear form functionality */}
                        <button className={styles.clear}>Clear Form</button>
                        <input type="submit" name="" id="" className={styles.submit__button} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default QuestionsPage