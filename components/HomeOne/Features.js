import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="section-title text-width">
                    <span>Care Features</span>
                    <h2>Create Awesome Service With Our Tools</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <i className="flaticon-promotion"></i>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    Marketing Analysis
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                            <div className="number">
                                <span>1</span>
                            </div>
                
                            <div className="shape">
                                <img src="/images/features-shape/features-shape-1.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <i className="flaticon-speed"></i>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    Website Optimization
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                            <div className="number">
                                <span>2</span>
                            </div>
                
                            <div className="shape">
                                <img src="/images/features-shape/features-shape-1.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <i className="flaticon-email"></i>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    Email Marketing
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                            <div className="number">
                                <span>3</span>
                            </div>
                
                            <div className="shape">
                                <img src="/images/features-shape/features-shape-1.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <i className="flaticon-network"></i>
                            </div>
                            <h3>
                                <Link href="/services-details">
                                    Social Media Marketing
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                            <div className="number">
                                <span>4</span>
                            </div>
                
                            <div className="shape">
                                <img src="/images/features-shape/features-shape-1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;