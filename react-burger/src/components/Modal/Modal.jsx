import ReactDOM from "react-dom";
import React from "react";
import stylesModal from './Modal.module.css';
import ModalOverlay from "../modal-overlay/ModalOverlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById('modals-root');

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}

function Modal({ onClose, children }) {

    function onEsc(evt) {
        if (evt.key === 'Escape') {
            evt.preventDefault()
            onClose();
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', onEsc)
        return () => {
            document.removeEventListener('keydown', onEsc)
        }
    })

    return ReactDOM.createPortal(
        <>
        <ModalOverlay onClick={onClose} />
        <div className={stylesModal.modal}>
            <button className={stylesModal.buttonClose} onClick={onClose} />
            <div className={stylesModal.children}>{children}</div>
        </div>
        </>,
        modalRoot
    )
}

export default Modal