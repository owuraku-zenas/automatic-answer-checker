import React, { useState } from 'react'
import Modal from '../../components/Modal'
import TestQuestion from '../../components/TestQuestion'
import styles from '../../styles/TestPage.module.css'
import { BiEdit } from "react-icons/bi";
import EditTitle from '../../components/EditTitle';
import EditQuestion from '../../components/EditQuestion';
import Swal from 'sweetalert2';

function TestPage() {

    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)
    const [title, setTitle] = useState("Enter Title")
    const [courseID, setCourseID] = useState("rbfvbfdiji")
    const [questions, setQuestions] = useState({})

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
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                    confirmButtonColor: 'rgb(63, 168, 238)'
                })
            }
        })
        console.log(id);
    }

    const editQuestion = (id) => {
        setIsOpen(true)
        setModalContent("question")
    }

    const Edit = (title, courseID) => {
        setTitle(title)
        setCourseID(courseID)
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
                            Course Code: { courseID }
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
                        <TestQuestion answer={"The anser is everywhere"} mark={2} question={"This Question 1"} deleteQuestion={deleteQuestion} editQuestion={editQuestion} />
                        <TestQuestion answer={"The anser is everywhere"} mark={2} question={"This Question 1"} deleteQuestion={deleteQuestion} editQuestion={editQuestion} />
                        <TestQuestion answer={"The anser is everywhere"} mark={2} question={"This Question 1"} deleteQuestion={deleteQuestion} editQuestion={editQuestion} />

                    </div>
                    <div className={styles.box}>
                        <button className={styles.submit__button} onClick={() => editQuestion() }>Add Question</button>
                        <button className={styles.submit__button} onClick={ () => submitQuestions() } >Set Test</button>
                    </div>
                </div>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} >
                {
                    modalContent === "title"
                        ? <EditTitle title={title}  courseID={courseID} edit={Edit} onClose={() => setIsOpen(false)} />
                        : <EditQuestion />
                }
            </Modal>
        </>
    )


}


export default TestPage