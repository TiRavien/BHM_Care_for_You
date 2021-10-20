import React from 'react';

const About = () => {
    return (
        <div>
            <div>
                <img src="https://i.ibb.co/2dy3NYC/healthcare1300x300.jpg" alt="" />
                <h3 className="text-primary mt-5">Our Features</h3>
            </div>
            <div className="row">
                <div className="col-lg-6 p-5">
                    <div className="col-lg-12">
                        <h3>A Brief History</h3>
                        <p>Healthcare industry started with home remedies. It began as a purely reactionary, medical practice in which people learnt about the medicinal properties of a plant through trial and error, documented it and passed on to others. The use of plants as healing agents is a long-standing practice.</p>
                    </div>
                    <div className="col-lg-12 p-5">
                        <div className="p-3">
                            <h3>Our Mission</h3>
                            <p>Our providers work as a team to ensure we meet all of your health care needs. With over 30 years of experience </p>
                        </div>
                        <div className="p-3">
                            <h3>Our Vision</h3>
                            <p>For medical, we accept most commercial insurances, Medicaid and Medicare.  We also see patients who do not have insurance.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src="https://i.ibb.co/vhtsTBt/doctors631x600.png" alt="" />
                </div>
            </div>
            <div className="text-secondary my-5">
                <h2>QUALITY CARE</h2>
                <h6>No matter your age or that of your family members, we provide a wide array of health care services to patients from newborn to seniors.</h6>
            </div>
        </div>
    );
};

export default About;