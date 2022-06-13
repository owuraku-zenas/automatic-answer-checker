import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import styles from "../styles/EditTitle.module.css"

function EditTitle({ title, courseID, edit, onClose }) {


    const [tempTitle, setTempTitle] = useState(title)
    const [tempCourseID, setTempCourseID] = useState(courseID)

    return (
        <div>
            <h2>Edit Course</h2>
            <form className={styles.form}>
                <div className={styles.group}>
                    {/* <label htmlFor="title">Title: </label> */}
                    <input
                        type="text"
                        id='title'
                        className={styles.input}
                        required
                        value={tempTitle}
                        onChange={
                            (e) => {
                                setTempTitle(e.target.value)
                            }
                        }
                    />
                </div>
                <div className={styles.group}>
                    {/* <label htmlFor="code">Course Code: </label> */}
                    <input
                        type="text"
                        id='code'
                        className={styles.input}
                        required
                        value={tempCourseID}
                        onChange={
                            (e) => {
                                setTempCourseID(e.target.value)
                            }
                        }
                    />
                </div>
                <div className={styles.button}>
                    <button
                        onClick={
                            (event) => {
                                edit(tempTitle, tempCourseID)
                                event.preventDefault()
                                onClose()
                            }

                        }
                    ><BiEdit />Edit</button>
                </div>
            </form>
        </div>
    )
}

export default EditTitle