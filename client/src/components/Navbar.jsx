import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

import style from '../styles/Navbar.module.css'

function NavigationBar() {
  return (
    <Navbar className='mt-3'>
      <Container>
        <Navbar.Brand>CAR SHOP</Navbar.Brand>
        <div className={`${style.navBarText}`}>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link>Register</Nav.Link>
            <Nav.Link>Login</Nav.Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
