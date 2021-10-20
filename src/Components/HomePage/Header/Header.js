import React from 'react';
import { Carousel, Button, Badge } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            src="https://i.ibb.co/X2JZGj0/carousel11263x475.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-danger mb-5">
                            <h1>Flu Vaccins</h1>
                            <h5>Now Available! Click here for Information...</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://i.ibb.co/QdTpbtV/carousel21263x475.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption className="text-info mb-5">
                            <h1>TeleHealth Visit</h1>
                            <h5>Call +878 453 2211 to Schedule</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://i.ibb.co/mXzmYDQ/carousel31263x475.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className="text-danger mb-5">
                            <h1>Not Feeling Well</h1>
                            <h5>Call us Fast +987 210 2211</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                
                <div className="row my-5">
                    <div className="col-lg-4 p-50">
                        <h1><i class="far fa-calendar-check"></i></h1>
                        <h3>Appointments</h3>
                        <p>Find and schedule an appointment with a physician that meets your needs.</p>
                        <Button variant="dark">Schedule Appointment <i class="fas fa-arrow-right"></i></Button>
                    </div>
                    <div className="col-lg-4">
                        <h1><i class="fab fa-wpforms"></i></h1>
                        <h3>Patient Forms</h3>
                        <p>To access a variety of patient forms for your convenience please click below</p>
                        <Button variant="dark">Patient Form <i class="fas fa-arrow-right"></i></Button>
                    </div>
                    <div className="col-lg-4">
                        <h1><i class="fas fa-user-injured"></i></h1>
                        <h3>Patient Portal</h3>
                        <p>Request appointments, request medication refills, view and pay your statements, and more.</p>
                        <Button variant="dark">Login <i class="fas fa-arrow-right"></i></Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;