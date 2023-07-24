import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import style from "../styles/utils.module.css";
import styleLogin from "../styles/Login.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    async function onSubmit(data) {
        await api.loginUser(data);
        reset();
        navigate('/')
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
                        <Form.Label>Парола</Form.Label>
                        <Form.Control
                            {...register("password", {
                                required: "Въведи парола",
                            })}
                            isInvalid={!!errors.password}
                            className="text-muted"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className={style.flexCenter}>
                        <Button
                            type="submit"
                            variant="outline-dark"
                            className={`mt-4 mb-5 w-50`}
                        >
                            Вход
                        </Button>
                    </div>
                </Form>
            </Row>
            <Link to="/signup">
                <div className={style.flexCenter}>
                    Нямаш регистрация? Направи си тук.
                </div>
            </Link>
        </Container>
    );
}

export default Login;
