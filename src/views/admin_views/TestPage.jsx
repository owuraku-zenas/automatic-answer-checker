import React, { useState } from 'react'
import Modal from '../../components/Modal'
import TestQuestion from '../../components/TestQuestion'
import styles from '../../styles/TestPage.module.css'
import { BiEdit } from "react-icons/bi";
import EditTitle from '../../components/EditTitle';
import EditQuestion from '../../components/EditQuestion';
import Swal from 'sweetalert2';
import AddQuestion from '../../components/AddQuestion';

function TestPage() {

    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)
    const [title, setTitle] = useState("Enter Title")
    const [courseID, setCourseID] = useState(Math.random().toString(16).substr(2, 7))
    const [targetQuestion, setTargetQuestion] = useState(null)
    const [questions, setQuestions] = useState([
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
    ])

    // TODO Use useEffect over here the questions

    const deleteQuestion = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(63, 168, 238)',
            cancelButtonColor: 'rgb(243, 79, 79)',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //   TODO Delete Question
                let array = [...questions]
                array.splice(id, 1)
                setQuestions(array)
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                    confirmButtonColor: 'rgb(63, 168, 238)'
                })
            }
        })
    }

    const editQuestionToggle = (id) => {
        setIsOpen(true)
        setModalContent("edit_question")
        setTargetQuestion(id)
    }

    // TODO Function to handle Editing Function
    const editQuestion = (id, question, answer, mark) => {

        let newQuestions = questions
        newQuestions[id] = {
            "question": question,
            "answer": answer,
            "mark": mark
        }


        setQuestions(newQuestions)
    }

    const Edit = (title, courseID) => {
        setTitle(title)
        setCourseID(courseID)
    }

    const addQuestion = (id, question, answer, mark) => {
        let newQuestion = { id, question, answer, mark }
        setQuestions([...questions,newQuestion])
    }


    const submitQuestions = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to edit the questions",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(63, 168, 238)',
            cancelButtonColor: 'rgb(243, 79, 79)',
            confirmButtonText: 'Yes, Set Questions'
        }).then((result) => {
            if (result.isConfirmed) {
                //   TODO Set Question
                Swal.fire({
                    title: 'Questions Set!',
                    text: 'You have set the Questions.',
                    icon: 'success',
                    confirmButtonColor: 'rgb(63, 168, 238)'
                })
            }
        })
    }

    return (
        <>
            <div className={styles.test__area}>
                <div className={styles.questions}>
                    <header>
                        <h1 className={styles.course__name}> {title} </h1>
                        <p className='course__code'>
                            Course Code: {courseID}
                        </p>
                        <button
                            className={styles.edit}
                            onClick={
                                () => {
                                    setIsOpen(true)
                                    setModalContent("title")
                                }
                            }
                        >
                            <BiEdit />Edit
                        </button>
                    </header>
                    <div>
                        {
                            questions.map((question, index) => (
                                <TestQuestion answer={question.answer} mark={question.mark} question={question.question} key={index} id={index} deleteQuestion={deleteQuestion} editQuestionToggle={editQuestionToggle}  />
                            ))
                        }

                    </div>
                    <div className={styles.box}>
                        <button
                            className={styles.submit__button}
                            onClick={
                                () => {
                                    setIsOpen(true)
                                    setModalContent("add_question")
                                }
                            }>
                            Add Question
                        </button>

                        <button
                            className={styles.submit__button}
                            onClick={
                                () => submitQuestions()
                            } >
                            Set Test
                        </button>
                    </div>
                </div>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} >
                {
                    modalContent === "title"
                        ? <EditTitle title={title} courseID={courseID} edit={Edit} onClose={() => setIsOpen(false)} />
                        : modalContent === "edit_question"
                            ? <EditQuestion data={questions[targetQuestion]} id={targetQuestion} editQuestion={editQuestion} onClose={() => setIsOpen(false)} />
                            : <AddQuestion addQuestion={addQuestion} onClose={() => setIsOpen(false)}/>
                }
            </Modal>
        </>
    )


}


export default TestPage