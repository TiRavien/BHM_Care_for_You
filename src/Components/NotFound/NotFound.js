import React from 'react';
import './NotFound.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound">
            <img src="https://i.ibb.co/xzCP0K3/1250x800.png" alt="" />
            <Link to="/"><Button variant="danger">Go Back</Button></Link>
        </div>
    );
};

export default NotFound;