import { Container, Nav, Navbar } from "react-bootstrap";
import { useCookies } from "react-cookie";

import style from "../styles/Navbar.module.css";

function NavigationBar() {
    const [cookies, setCookies] = useCookies();

    const logout = () => {
        setCookies("accessToken", "");
        window.localStorage.clear("userID");
    };

    return (
        <Navbar sticky="top" expand="md" className="mt-3">
            <Container>
                <Navbar.Brand>SECOND DRIVE</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <div className={`${style.navBarText}`}>
                            <Nav.Link href="/">Начало</Nav.Link>
                            {cookies.accessToken ? (
                                <>
                                    <Nav.Link>Моите обяви</Nav.Link>
                                    <Nav.Link>Любими обяви</Nav.Link>
                                    <Nav.Link onClick={logout} href="/">
                                        Изход
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link href="/signup">
                                        Регистрация
                                    </Nav.Link>
                                    <Nav.Link href="/login">Вход</Nav.Link>
                                </>
                            )}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
