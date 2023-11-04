import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-email-1"></i>
                            </div>

                            <h3>Email Here</h3>
                            <p><a href="mailto:info@peachstridesandpristine.com">info@peachstridesandpristine.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-pin"></i>
                            </div>

                            <h3>Location Here</h3>
                            <p><a href="https://maps.app.goo.gl/kjrUTNGkKHzna9mP6" target="_blank">Second floor: 5 Moshalashi Street, Apata, Lagos</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-call"></i>
                            </div>

                            <h3>Call Here</h3>
                            <p><a href="tel:1234567890">08020970266</a></p>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;