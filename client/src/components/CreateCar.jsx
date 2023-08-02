import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import CarForm from "../utils/CarForm";

const URL = "http://localhost:5003/create";

function CreateCar({ onClose, addNewCar }) {

    async function onSubmit(data) {
        try {
            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("price", data.price);
            formData.append("engine", data.engine);
            formData.append("description", data.description);
            formData.append("mileage", data.mileage);
            formData.append("location", data.location);
            formData.append("image", data.image);

            const response = await fetch(URL, {
                method: "POST",
                body: formData,
            });

            const newCar = await response.json();
            addNewCar(newCar);

            onClose();
        } catch (error) {
            console.error("Error creating car:", error);
        }
    }

    return (
        <Modal show onHide={onClose} centered>
            <Modal.Body>
                <Modal.Title>Добавяне на обява</Modal.Title>
                <CarForm onSubmit={onSubmit} />
            </Modal.Body>
        </Modal>
    );
}

export default CreateCar;
