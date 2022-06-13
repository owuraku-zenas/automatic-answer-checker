import React from 'react'
import styles from '../styles/TestsPage.module.css'

function Course({ courseName, courseCode, icon, onClick }) {

    return (
        <div className={styles.course} onClick={onClick}>
            {
                !icon
                    ? <h2> {courseName} </h2>
                    : <h2 className={styles.icon} > {courseName} </h2>
            }
            {
                !icon
                    ? <p>Test Code: {courseCode} </p>
                    : null
            }
        </div>
    )
}

export default Course