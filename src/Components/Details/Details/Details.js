import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);


    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const singleData = details.find(detail => detail.id == serviceId)
    console.log(singleData);

    return (
        < div >
            <h2>Details:{serviceId}</h2>

        </div >
    );
};

export default Details;