import React from 'react';
import Link from 'next/link';

const ServicesStyleThree = () => {
    return (
        <div className="services-area bg-fafafa pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Services we provided</span>
                    <h2>Our Digital Marketing Services</h2>
                    <div className="bar"></div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-code"></i>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    Website Development
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                            
                            <Link href="/services-details" className="services-btn">
                                Read More<i className='bx bx-chevrons-right'></i>

                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-vector"></i>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    Web Design
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                            
                            <Link href="/services-details" className="services-btn">
                                Read More<i className='bx bx-chevrons-right'></i>

                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-network"></i>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    Social Media Marketing
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                            
                            <Link href="/services-details" className="services-btn">
                                Read More<i className='bx bx-chevrons-right'></i>

                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-search"></i>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    Content Marketing
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                            
                            <Link href="/services-details" className="services-btn">
                                Read More<i className='bx bx-chevrons-right'></i>

                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-digital-marketing-1"></i>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    Digital Media & PPC
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                            
                            <Link href="/services-details" className="services-btn">
                                Read More<i className='bx bx-chevrons-right'></i>

                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-cpu"></i>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    Technology
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                            
                            <Link href="/services-details" className="services-btn">
                                Read More<i className='bx bx-chevrons-right'></i>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="default-shape">
                <div className="shape1">
                    <img src="/images/default-shape/default-shape1.png" alt="image" />
                </div>
                <div className="shape2">
                    <img src="/images/default-shape/default-shape2.png" alt="image" />
                </div>
                <div className="shape3">
                    <img src="/images/default-shape/default-shape3.png" alt="image" />
                </div>
                <div className="shape4">
                    <img src="/images/default-shape/default-shape4.png" alt="image" />
                </div>
            </div>
        </div>
    );
}

export default ServicesStyleThree;