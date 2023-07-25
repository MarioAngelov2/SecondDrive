import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import style from "../styles/Navbar.module.css";

function NavigationBar() {

    return (
        <Navbar sticky="top" expand="md" className="mt-3">
            <Container>
                <Navbar.Brand>SECOND DRIVE</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <div className={`${style.navBarText}`}>
                            <Nav.Link href="/">Начало</Nav.Link>
                            <Nav.Link href="/signup">Регистрация</Nav.Link>
                            <Nav.Link href="/login">Вход</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
