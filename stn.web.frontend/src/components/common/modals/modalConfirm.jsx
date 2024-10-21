import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useStnStore } from "../../../stores/useStateStore";

// Modal que será utilizado para confirmar acciones o errores
export const ModalConfirm = () => {
    const { closeModalConfirm } = useStnStore();
    const modalStore = useStnStore((state) => state.modalConfirm);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(modalStore.isOpen);
    }, [modalStore.isOpen]);

    const handleClose = () => {
        if (modalStore.onCancel) {
            modalStore.onCancel();
        }
        closeModalConfirm()
        setShow(false);
    };

    const modalContent = (
        <Modal show={show}
         onHide={handleClose}
         container={document.getElementById('modal')}>
            <Modal.Header closeButton>
                <Modal.Title>{modalStore.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalStore.body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {modalStore.labelClose ?? 'Cerrar'}
                </Button>
            </Modal.Footer>
        </Modal >
    );

return ReactDOM.createPortal(modalContent, document.getElementById('modal'));
};

export default ModalConfirm;