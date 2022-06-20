import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Question from '../components/Question'
import styles from "../styles/QuestionsPage.module.css"



function QuestionsPage() {

    const questions = [
        {
            "id": 0,
            "question": "What is the name of the tallest man in the world?",
            "answer": "I do not care",
            "mark": 10
        },
        {
            "id": 1,
            "question": "Who is the name of the president of Ghana",
            "answer": "Emmaanuella Dodoo",
            "mark": 20
        },
        {
            "id": 2,
            "question": "Who is the mother of our Lord Jesus Christ",
            "answer": "Mary",
            "mark": 8
        },
        {
            "id": 3,
            "question": "Why do we sleep at night?",
            "answer": "To rest",
            "mark": 15
        },
        {
            "id": 4,
            "question": "The former Vice Chancellor of the University of Ghana",
            "answer": "Ebenezer Oduro Owusu",
            "mark": 25
        }
    ]


    const [answers, setAnswers] = useState([])
    const navigate = useNavigate()


    const updateAnswers = (id, answer) => {
        let newAnswer = {
            id: id,
            answer: answer
        }
        setAnswers([...answers, newAnswer])
        console.log(answers);
    }

    const submitAnswers = () => {
        // TODO submit Answers(Order them first)
        let array = answers.reverse()

        let uniqueAnswers = [...new Map(array.map((item) => [item["id"], item])).values()].reverse();

        console.log("unique: ",uniqueAnswers);
        navigate("/score")

    }


    return (
        <div className={styles.questions__area}>
            <div className={styles.questions}>
                <header>
                    <h1>Attempt All Questions</h1>
                </header>
                <form
                    onSubmit={
                        (event) => {
                            event.preventDefault()
                            submitAnswers()
                        }
                    }
                >
                    {
                        questions.map((question, index) => (
                            <Question question={question.question} id={index} key={index} updateAnswers={updateAnswers} />
                        ))
                    }
                    <div className={styles.buttons}>
                        <input
                            type="submit"
                            name=""
                            id=""
                            className={styles.submit__button}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default QuestionsPage