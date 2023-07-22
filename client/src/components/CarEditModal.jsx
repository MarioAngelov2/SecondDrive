import React from "react";
import { Modal } from "react-bootstrap";
import CarForm from "../utils/CarForm";


function CarEditModal({ onClose, onSubmit, initialValues }) {
    return (
        <Modal show onHide={onClose} centered>
            <Modal.Body>
                <Modal.Header>Редактиране на обява</Modal.Header>
                <CarForm onSubmit={onSubmit} initialValues={initialValues} />
            </Modal.Body>
        </Modal>
    );
}

export default CarEditModal;
