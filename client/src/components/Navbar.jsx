import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

import style from '../styles/Navbar.module.css'

function NavigationBar() {
  return (
    <Navbar className='mt-3'>
      <Container>
        <Navbar.Brand>SECOND DRIVE</Navbar.Brand>
        <div className={`${style.navBarText}`}>
            <Nav.Link href='/'>Начало</Nav.Link>
            <Nav.Link href='/signup'>Регистрация</Nav.Link>
            <Nav.Link href='/login'>Вход</Nav.Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
