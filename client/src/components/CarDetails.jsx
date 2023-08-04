import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as api from "../services/api";
import { useParams } from "react-router-dom";
import { LiaBackspaceSolid } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import CarEditModal from "./CarEditModal";
import { useCookies } from "react-cookie";

import styleUtils from "../styles/utils.module.css";
import style from "../styles/Details.module.css";

const URL = "http://localhost:5003/update/";

function CarDetails({ removeDeletedCar }) {
    const [cookies] = useCookies(["accessToken"]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const navigate = useNavigate();

    const [handleOpenEditModal, setHandleOpenEditModal] = useState(false);

    const handleAddFavoriteCar = async () => {
        try {
            await api.addToFavorites(id, cookies.accessToken);
        } catch (error) {
            console.log(error);
        }
    };

    async function getCar() {
        const result = await api.getById(id);
        setCar(result);
    }

    async function deleteCar(id) {
        await api.deleteCar(id);
        removeDeletedCar(id);
        navigate("/");
    }

    useEffect(() => {
        getCar();
        setIsLoggedIn(!!cookies.accessToken);
    }, [cookies]);

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
            setCar(result);

            setHandleOpenEditModal(false);
            return result;
        } catch (error) {
            console.error("Error updating car:", error);
        }
    }

    const handleChange = () => {
        setHandleOpenEditModal(true);
    };

    if (!car) {
        return (
            <div className={`mt-5 ${styleUtils.flexCenter}`}>
                <Spinner animation="border" role="status"></Spinner>
            </div>
        );
    }

    const isOwnerButtons =
        car.userOwner && isLoggedIn ? (
            <div className={style.buttons}>
                <Button onClick={handleChange} size="sm" variant="outline-dark">
                    Редактирай обява
                </Button>
                <Button
                    onClick={handleAddFavoriteCar}
                    size="sm"
                    variant="outline-dark"
                >
                    Добави в любими
                </Button>
                <Button
                    onClick={() => deleteCar(car._id)}
                    size="sm"
                    variant="outline-danger"
                >
                    Изтрий обява
                </Button>
            </div>
        ) : null;
    return (
        <Container>
            <Row className={`mt-5`}>
                <Col>
                    <LiaBackspaceSolid
                        onClick={() => navigate("/")}
                        size={30}
                        className={`${style.backIcon} mb-5`}
                    />
                    <h2 className={styleUtils.textCenter}>{car.title}</h2>
                    <div className={style.flexColumn}>
                        <span>Двигател: {car.engine}</span>
                        <span>Пробег: {car.mileage}</span>
                        <span>Описание: {car.description}</span>
                    </div>
                    <div className={style.price}>
                        <h5>Цена: {car.price}</h5>
                    </div>
                    <div className={style.flexRow}>
                        <AiOutlineMail size={23} />
                        Изпрати запитване
                    </div>
                    <div className={style.flexRow}>
                        <CiLocationOn size={23} />
                        {car.location}
                    </div>
                    {isOwnerButtons}
                </Col>
                <Col md={7}>
                    <Image className={style.image} src={car.image} fluid />
                </Col>
            </Row>
            {handleOpenEditModal && (
                <CarEditModal
                    onClose={setHandleOpenEditModal}
                    onSubmit={onSubmit}
                    initialValues={car}
                />
            )}
        </Container>
    );
}
export default CarDetails;
