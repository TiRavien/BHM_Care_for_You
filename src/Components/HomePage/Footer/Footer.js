import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-lg-3 col-sm-6 p-3">
                    <h3>About Us</h3>
                    <p>hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.[1]which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness. </p>
                </div>
                <div className="col-lg-3 col-sm-6 p-3">
                    <h3 className="py-1">Quick Links</h3>
                    <h6 className="py-1">How We Are</h6>
                    <h6 className="py-1">Terms & Conditions</h6>
                    <h6 className="py-1">Privacy</h6>
                    <h6 className="py-1"> Our Awards</h6>
                    <h6 className="py-1">Our Professionals</h6>
                </div>
                <div className="col-lg-3 col-sm-6 p-3">
                    <h3>Promotions</h3>
                    <h6 className="py-1">Hey, Submit this</h6>
                    <input className="my-2" type="text" placeholder="Email" />
                    <br />
                    <Button variant="danger">SUBSCRIBE</Button>
                </div>
                <div className="col-lg-3 col-sm-6 p-3">
                    <h3 className="py-2">Get In Touch</h3>
                    <h6 className="py-2">Clinic Address</h6>
                    <h6 className="py-2">Call center</h6>
                    <h6 className="py-2">Our E-mail</h6>
                </div>
            </div>
            <hr />
            <div>
                <p>Privacy Policy <i className="far fa-copyright"></i>2021 All reserverd Copyright</p>
                <h6>By Authority</h6>
            </div>
        </div>
    );
};

export default Footer;