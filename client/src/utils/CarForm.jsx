import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

import styleUtils from "../styles/utils.module.css";

function CarForm({ onSubmit, initialValues }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues: initialValues
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setValue("image", file);
    };

    return (
        <>
            <Form
                method="post"
                encType="multipart/form-data"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Модел:</Form.Label>
                    <Form.Control
                        className="text-muted"
                        type="text"
                        placeholder="BMW E91..."
                        {...register("title", { required: "Required" })}
                    />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Двигател:</Form.Label>
                    <Form.Control
                        className="text-muted"
                        type="text"
                        placeholder="2.0 D..."
                        {...register("engine", {
                            required: "Required",
                        })}
                    />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Пробег:</Form.Label>
                    <Form.Control
                        className="text-muted"
                        type="number"
                        placeholder="250 000 км..."
                        {...register("mileage", {
                            required: "Required",
                        })}
                    />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Местоположение:</Form.Label>
                    <Form.Control
                        className="text-muted"
                        type="text"
                        placeholder="София, България..."
                        {...register("location", {
                            required: "Required",
                        })}
                    />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Описание:</Form.Label>
                    <Form.Control
                        className="text-muted"
                        type="text"
                        placeholder="Има забележки..."
                        {...register("description", {
                            required: "Required",
                        })}
                    />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Цена:</Form.Label>
                    <Form.Control
                        className="text-muted"
                        type="number"
                        placeholder="10 500 лв..."
                        {...register("price", { required: "Required" })}
                    />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Качи снимка</Form.Label>
                    <Form.Control
                        name="image"
                        onChange={handleFileChange}
                        type="file"
                    />
                </Form.Group>
                <div className={styleUtils.flexCenter}>
                    <Button
                        variant="outline-dark"
                        id="submitCreateCar"
                        type="submit"
                        className={`mt-4 mb-3 `}
                    >
                        Добави
                    </Button>
                </div>
            </Form>
        </>
    );
}

export default CarForm;
