import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="main-banner-item">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content">
                                        <h1>Your right hand for trusted business services</h1>
                                           <div className="banner-btn">
                                            <Link href="/contact-1" className="default-btn">
                                                    Get Started
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="main-banner-image">
                                        <img src="/images/banner/banner-image-1.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-banner-shape">
                <div className="shape-1">
                    <img src="/images/banner/banner-shape-1.png" alt="image" />
                </div>
                <div className="shape-2">
                    <img src="/images/banner/banner-shape-2.png" alt="image" />
                </div>
                <div className="shape-3">
                    <img src="/images/banner/banner-shape-3.png" alt="image" />
                </div>
            </div>
        </div>
    );
}

export default MainBanner;