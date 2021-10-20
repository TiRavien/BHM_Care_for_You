import React from 'react';
import './Register.css';
import { Button, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register">
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="name" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Enter Your Email</Form.Label>
                    <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-type Password" />
                </Form.Group>
            </Form>
            <h6>Already have Membership? <Nav.Link as={Link} to="/login">Go to Log In</Nav.Link></h6>

            <Button variant="info">Register <i class="fas fa-sign-out-alt"></i></Button>
        </div>
    );
};

export default Register;