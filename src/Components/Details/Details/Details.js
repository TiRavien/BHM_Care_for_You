import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);


    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => {
                const singleData = data.find(detail => detail.id == serviceId);
                setDetails(singleData)
            })
    }, [serviceId])
    

    return (
        < div className="col-lg-12">
            <Card>
                <h2 className="text-primary p-3">DETAILS</h2>
                <Card.Img className="details" variant="top" src={details.img} />
                <Card.Body>
                    <Card.Text className="p-2">
                        <h3>{details.name}</h3>
                        <p>{details.description}</p>

                        <h6>{details.time}</h6>
                    </Card.Text>
                    <Button variant="warning">APPOINTMENT <i className="fas fa-arrow-right"></i></Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Details;