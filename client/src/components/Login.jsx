import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import style from "../styles/utils.module.css";
import styleLogin from "../styles/Login.module.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <Container className={`${styleLogin.loginContainer} w-50`}>
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>Потребителско име</Form.Label>
                        <Form.Control className="text-muted" type="text" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Парола</Form.Label>
                        <Form.Control className="text-muted" type="text" />
                    </Form.Group>
                </Form>
                <div className={style.flexCenter}>
                    <Button variant="outline-dark" className={`mt-4 mb-5 w-50`}>
                        Вход
                    </Button>
                </div>
            </Row>
            <Link to='/register'>
                <div className={style.flexCenter}>
                    Нямаш регистрация? Направи си тук.
                </div>
            </Link>
        </Container>
    );
}

export default Login;
