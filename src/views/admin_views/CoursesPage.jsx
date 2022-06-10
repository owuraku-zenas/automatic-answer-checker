import React, { useState } from 'react'
import styles from '../../styles/CoursesPage.module.css'
import { BsPlusCircle } from 'react-icons/bs'
import Course from '../../components/Course'
import Modal from '../../components/Modal'

function CoursesPage() {
    const [isOpen, SetIsOpen] = useState(false)
    return (
        <div className={styles.page}>
            <h1>Courses</h1>
            <div className={styles.courses}>
                <Course courseName={"Aritificial Intelligence"} courseCode={"CPEN405"} />
                <Course courseName={"Control Systems"} courseCode={"CPEN405"} />
                <Course courseName={"Aritificial Intelligence"} courseCode={"CPEN405"} />
                <Course courseName={"Aritificial Intelligence"} courseCode={"CPEN405"} />
                <Course courseName={"Aritificial Intelligence"} courseCode={"CPEN405"} />
                <Course courseName={"Aritificial Intelligence"} courseCode={"CPEN405"} />
                <Course
                    courseName={<BsPlusCircle />}
                    icon={true}
                    onClick={
                        () => {
                            SetIsOpen(true)
                        }
                    }
                />
            </div>
            <Modal open={isOpen} onClose={() => SetIsOpen(false)}>
                Hello
            </Modal>
        </div>

    )
}

export default CoursesPage