import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import style from "../styles/utils.module.css";
import styleLogin from "../styles/Login.module.css";
import { Link } from "react-router-dom";

function Register() {

    return (
        <Container className={`${styleLogin.loginContainer} w-50`}>
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>Имейл</Form.Label>
                        <Form.Control className="text-muted" type="text" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Парола</Form.Label>
                        <Form.Control className="text-muted" type="text" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Повтори парола</Form.Label>
                        <Form.Control className="text-muted" type="text" />
                    </Form.Group>
                </Form>
                <div className={style.flexCenter}>
                    <Button variant="outline-dark" className={`mt-4 mb-5 w-50`}>
                        Регистрирай
                    </Button>
                </div>
            </Row>
            <Link to='/login'>
                <div className={style.flexCenter}>
                    Имаш съществуващ профил? Влез тук.
                </div>
            </Link>
        </Container>
    );
}

export default Register;
