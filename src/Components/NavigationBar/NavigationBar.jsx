import React from 'react';
import './NavigationBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import AirplaneLogo from '../../Assets/Images/logo.png';

function NavigationBar() {

    return (
        <Navbar expand='lg' className='position-fixed w-100 z-2' style={{
            top: 0,
        }}
        >
            <Container>
                <Navbar.Brand className='text-light'>
                    <Link to='/' className='text-decoration-none text-light d-flex'>
                        <img className='me-2' src={AirplaneLogo} alt="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' className='text-light' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto w-100 justify-content-center'>
                        <Nav.Link href='/' className='text-light'>TRANG CHỦ</Nav.Link>
                        <Nav.Link href='/introduce' className='text-light'>GIỚI THIỆU</Nav.Link>
                        <Nav.Link href='/hotTour' className='text-light text-capitalize'>BEST TOUR</Nav.Link>
                        <Nav.Link href='/city-breaks' className='text-light text-capitalize'>TOUR TRONG NƯỚC</Nav.Link>
                        <Nav.Link href='/destinations' className='text-light'>TOUR NGOÀI NƯỚC</Nav.Link>
                        <Nav.Link href='/contact' className='text-light'>LIÊN HỆ</Nav.Link>
                    </Nav>
                    <Button variant='light'>
                        <Link to='/' className='text-decoration-none text-capitalize text-dark text-nowrap'>Đăng nhập</Link>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;