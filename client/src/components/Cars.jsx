import React from "react";
import { Card, Image } from "react-bootstrap";
import dateFormat from "../utils/dateFormat";
import { useNavigate } from "react-router-dom";

import style from "../styles/Car.module.css";

function Cars({ car }) {
    const navigate = useNavigate();

    return (
        <Card className={style.carCard} onClick={() => navigate(`/${car._id}`)}>
            <Card.Body className={style.cardBody}>
                <Card.Header>
                    <Card.Title>{car.title}</Card.Title>
                </Card.Header>
                <Card.Img
                    variant="top"
                    src={car.image}
                    className={style.imageStyle}
                />
                <Card.Text className="text-muted">
                    <p>Двигател: {car.engine}</p>
                    <p>Пробег: {car.mileage}</p>
                    <p>Местоположение: {car.location}</p>
                    <p>Описание: {car.description}</p>
                    <p>Цена: {car.price}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>Добавена на: {dateFormat(car.createdAt)}</Card.Footer>
        </Card>
    );
}

export default Cars;
