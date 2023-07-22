import React from "react";
import { Modal } from "react-bootstrap";
import CarForm from "../utils/CarForm";
import { useNavigate, useParams } from "react-router-dom";

const URL = "http://localhost:5003/edit/";

function EditCar({ onClose }) {
    const navigate = useNavigate();
    const { id } = useParams();

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

            const response = await fetch(URL + id, {
                method: "PATCH",
                body: formData,
            });

            const result = await response.json();
            console.log(result);

            navigate(`/${id}`);
            return result;
        } catch (error) {
            console.error("Error updating car:", error);
        }
    }

    return (
        <Modal show onHide={onClose} centered>
            <Modal.Body>
                <Modal.Header>Редактиране на обява</Modal.Header>
                <CarForm onSubmit={onSubmit} />
            </Modal.Body>
        </Modal>
    );
}

export default EditCar;
