"use client";

import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useStnStore } from '../../../../stores/useStateStore';

const ContentModal = () => {
  const modalContent = useStnStore(state => state.ModalContent);
  return (
    modalContent && <Modal
      show={modalContent.isOpen}
      onHide={modalContent.onCancel}
      size={modalContent.size ?? "xl"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalContent.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalContent.body}
      </Modal.Body>
      <Modal.Footer>
        {modalContent.labelAction && <Button onClick={modalContent.onAction}>{modalContent.labelAction}</Button>}
        <Button variant="danger" onClick={modalContent.onCancel}>{modalContent.labelClose}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContentModal;
