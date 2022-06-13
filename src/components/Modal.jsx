import React from 'react'
import ReactDom from 'react-dom'
import styles from '../styles/Modal.module.css'
import { IoMdClose } from "react-icons/io";


function Modal({ open, children, onClose }) {
    if (open) {
        return ReactDom.createPortal(
            <>
                <div className={styles.overlay}/>
                <div className={styles.modal}>
                    <div className={styles.header}>
                        <button className={styles.close__button} onClick={onClose}><IoMdClose /></button>
                    </div>
                    <div className={styles.body}>
                    {children}
                    </div>
                </div>
            </>,
            document.getElementById('portal')
        )
    } else {
        return null
    }
}

export default Modal