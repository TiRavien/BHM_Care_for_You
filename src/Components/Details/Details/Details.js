import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);


    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const singleData = details.find(detail => detail.id == serviceId);

    const { img, name, description, time } = serviceId;
    console.log(singleData);

    return (
        < div className="col-lg-12">
            <Card>
                <h2 className="text-primary p-3">DETAILS</h2>
                <Card.Img className="details" variant="top" src={img} />
                <Card.Body>
                    <Card.Text className="p-2">
                        <h3>{name}</h3>
                        <p>{description}</p>

                        <h6>{time}</h6>
                    </Card.Text>
                    <Button variant="warning">APPOINTMENT <i className="fas fa-arrow-right"></i></Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Details;