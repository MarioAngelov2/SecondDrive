import React, { useState } from "react";
import { Container, Row, Form, Button, Alert } from "react-bootstrap";
import style from "../styles/utils.module.css";
import styleLogin from "../styles/Login.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as api from "../services/api";

function Register() {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    async function onSubmit(data) {
        await api.createUser(data);
        setIsSuccess(true);
        reset();
    }

    return (
        <Container className={`${styleLogin.loginContainer} w-50`}>
            <Row>
                <Form method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Потребителско име</Form.Label>
                        <Form.Control
                            {...register("username", {
                                required: "Въведи потребителско име",
                            })}
                            isInvalid={!!errors.username}
                            className="text-muted"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.username?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Имейл</Form.Label>
                        <Form.Control
                            {...register("email", { required: "Въведи имейл" })}
                            isInvalid={!!errors.email}
                            className="text-muted"
                            type="email"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Парола</Form.Label>
                        <Form.Control
                            {...register("password", {
                                required: "Въведи парола",
                            })}
                            isInvalid={!!errors.password}
                            className="text-muted"
                            type="password"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Повтори парола</Form.Label>
                        <Form.Control
                            {...register("repassword", {
                                required: "Въведи повторно парола",
                            })}
                            isInvalid={!!errors.repassword}
                            className="text-muted"
                            type="password"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.repassword?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    {isSuccess ? (
                        <Alert
                            className={`mt-3 ${style.flexCenter}`}
                            variant="success"
                        >
                            Успешна регистрация!
                        </Alert>
                    ) : (
                        <div className={style.flexCenter}>
                            <Button
                                type="submit"
                                variant="outline-dark"
                                className={`mt-4 mb-5 w-50`}
                            >
                                Регистрирай
                            </Button>
                        </div>
                    )}
                </Form>
            </Row>
            <Link to="/login">
                <div className={style.flexCenter}>
                    Имаш съществуващ профил? Влез тук.
                </div>
            </Link>
        </Container>
    );
}

export default Register;
