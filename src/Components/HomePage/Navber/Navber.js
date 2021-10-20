import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import './Navber.css';

const Navber = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="fixed-top">
            <div className="header">
                <p><i class="fas fa-phone-alt"></i>+876 904 3287</p>
                <p><i class="fas fa-envelope-open-text"></i>contact@hospital.gmail.com</p>
                <p><i class="far fa-clock"></i>Sat-Thu 09:00-21:00</p>
            </div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <h5>BHM</h5>
                        <h2><i class="fas fa-stethoscope"></i></h2>
                        <p>Care for You</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/features">FEATURES</Nav.Link>
                        <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">LOGOUT</Button> :
                            <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                        }
                        <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>

                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;