import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as api from "../services/api";
import { useParams, Link } from "react-router-dom";
import { LiaBackspaceSolid } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

import styleUtils from "../styles/utils.module.css";
import style from "../styles/Details.module.css";

function CarDetails({ removeDeletedCar }) {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const navigate = useNavigate();

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
    }, []);

    if (!car) {
        return <div>Loading...</div>;
    }
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
                    <div className={style.buttons}>
                        <Link to={`/edit/${id}`}>
                            <Button size="sm" variant="outline-dark">
                                Редактирай обява
                            </Button>
                        </Link>
                        <Button size="sm" variant="outline-dark">
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
                </Col>
                <Col md={7}>
                    <Image className={style.image} src={car.image} fluid />
                </Col>
            </Row>
        </Container>
    );
}
export default CarDetails;
