import React from 'react';
import './Service.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, description, time, img } = props.service;
    return (
        <>
            <div className="service row">
                <div className="col-lg-6 col-sm-6 col-12">
                    <img src={img} alt="" />
                </div>
                <div className="services col-lg-6 col-sm-6 col-12">
                    <h3>{name}</h3>
                    <p>{description}</p>

                    <h6>{time}</h6>
                    <Link to={`/details/${id}`}><Button variant="danger">View more <i class="fas fa-arrow-right"></i></Button></Link>
                </div>
            </div>
        </>
    );
};

export default Service;