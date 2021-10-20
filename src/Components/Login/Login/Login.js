import React, { useState } from 'react';
import './Login.css';
import { Button, FloatingLabel, Form, Nav } from 'react-bootstrap';
import useAuth from '../../../Hooks/UseAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { signInUsingGoogle, setUser, setIsLoading, emailPasswordLogIn } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.form || "/home";

    const emailInput = (e) => {
        setEmail(e.target.value)
    }

    const passwordInput = (e) => {
        setPassword(e.target.value)
    }

    const handleEmailSignIn = () => {
        emailPasswordLogIn(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user)
                setIsLoading(false)
                history.push(redirectUrl);
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // ..
            });
    }


    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirectUrl);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className="login">
            <h2>LOGIN</h2>
            <div>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control onChange={emailInput} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control onChange={passwordInput} type="password" placeholder="Password" />
                </FloatingLabel>
            </div>
            <h6>Create a New Account  <Nav.Link as={Link} to="/register">Go to Register</Nav.Link></h6>
            <Button onClick={handleEmailSignIn} variant="info">Login <i class="fas fa-sign-in-alt"></i></Button>
            <hr />
            <Button onClick={handleGoogleLogIn} variant="warning"><i class="fab fa-google"></i> Sign In</Button>
        </div>
    );
};

export default Login;