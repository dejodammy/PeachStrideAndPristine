import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="features-area pt-10 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="features-inner-content">
                            <span>Why choose us?</span>
                            <h3>Our competitive Advantages</h3>
                            <div className="bar"></div>
                            <ul className="features-list">
                                <li>
                                    <span><i className="flaticon-checked"></i> Teamwide Commitment to Quality Services</span>
                                </li>
                                <li>
                                    <span><i className="flaticon-checked"></i>Striving for Consistent Professionalism</span>
                                </li>
                                <li>
                                    <span><i className="flaticon-checked"></i>Certified and Licensed Expertise</span>
                                </li>
                                <li>
                                    <span><i className="flaticon-checked"></i>Proven Track Record with Clients</span>
                                </li>
                                <li>
                                    <span><i className="flaticon-checked"></i>Streamlined and Effective Processes</span>
                                </li>
                                <li>
                                    <span><i className="flaticon-checked"></i> National On Site Lead: In 6 Nigerian States</span>
                                </li>
                            </ul>

                          
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="features-image">
                            <img src="/images/features/features-1.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;