import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import * as api from "./services/api";
import Cars from "./components/Cars";
import CreateCar from "./components/CreateCar";
import CarDetails from "./components/CarDetails";
import NavigationBar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import styleUtils from "./styles/utils.module.css";

function App() {
    const [cars, setCars] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = () => setIsModalOpen(true);

    async function loadCars() {
        try {
            const response = await api.getAll();
            setCars(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadCars();
    }, []);

    // Update state when a new car is added
    const addNewCar = (newCar) => {
        setCars((prevData) => [...cars, newCar]);
    };

    // Update state when a car is deleted
    const removeDeletedCar = (id) => {
        setCars(cars.filter((existingCar) => existingCar._id !== id));
    };

    const carsGrid = (
        <Row xs={1} md={2} xl={3} xxl={4} className="g-4 mt-3 mb-4">
            {cars.map((car) => (
                <Col key={car._id}>
                    <Cars car={car} />
                </Col>
            ))}
        </Row>
    );

    const homePage = (
        <>
            <div
                className={`${styleUtils.blockCenter} ${styleUtils.flexCenter}`}
            >
                <Button
                    variant="outline-dark"
                    onClick={handleOpen}
                    className={`mt-4 ${styleUtils.blockCenter}`}
                >
                    Добави обява
                </Button>
            </div>
            {cars.length > 0 ? (
                carsGrid
            ) : (
                <h4 className={`mt-5 ${styleUtils.flexCenter}`}>
                    No cars to show
                </h4>
            )}
        </>
    );

    return (
        <Container>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={homePage} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route
                        path="/:id"
                        element={
                            <CarDetails
                                removeDeletedCar={removeDeletedCar}
                                onClose={setIsModalOpen}
                            />
                        }
                    />
                </Routes>
                {isModalOpen && (
                    <CreateCar
                        onClose={() => setIsModalOpen(false)}
                        addNewCar={addNewCar}
                    />
                )}
        </Container>
    );
}

export default App;
