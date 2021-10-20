import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our Services</h2>
            <div className="service">
                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                }
            </div>
            <div className="row my-5 p-3">
                <div className="col-lg-8">
                    <h6>Our patients are important to us. To better serve you, we would like to hear from you. After visiting Grace Health, we will either e-mail or text you a survey to complete.  If you do not receive a survey, you may still provide us with feedback by clicking the Patient Satisfaction Survey button.</h6>
                </div>
                <div className="col-lg-4">
                    <Button variant="success">Patient Satisfaction Servey <i class="fas fa-arrow-right"></i></Button>
                </div>
            </div>
        </div>
    );
};

export default Services;