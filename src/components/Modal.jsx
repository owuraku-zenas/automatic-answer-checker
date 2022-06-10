import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "45%",
    trasform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "50px",
    zIndex: 100000,
    display: "flex",
    flexDirection: "column"

}

const OVERLAY_STYLE = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 1000
}

function Modal({ open, children, onClose }) {
    if (open) {
        return ReactDom.createPortal(
            <>
                <div style={OVERLAY_STYLE} />
                <div style={MODAL_STYLES}>
                    <button onClick={onClose}>Close Modal</button>
                    {children}
                </div>
            </>,
            document.getElementById('portal')
        )
    } else {
        return null
    }
}

export default Modal