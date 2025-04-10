import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const PortfolioTwo = () => {
    return <>
        <Navbar />

        <PageBanner 
            pageTitle="Our Portfolio " 
            homePageUrl="/" 
            homePageText="Home" 
            activePageText="Our Portfolio " 
            BGImage="item-bg1" 
        />

        <div className="portfolio-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">                               

                                    <img src="/images/portfolio/portfolio-1.jpg" alt="image" />

                             
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                              

                                    <img src="/images/portfolio/portfolio-2.jpg" alt="image" />

                             
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                              

                                    <img src="/images/portfolio/portfolio-3.jpeg" alt="image" />

                              
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                               

                                    <img src="/images/portfolio/portfolio-4.jpg" alt="image" />

                            
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                              

                                    <img src="/images/portfolio/portfolio-5.jpg" alt="image" />

                               
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                               

                                    <img src="/images/portfolio/portfolio-6.jpeg" alt="image" />

                              
                            </div>


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
    
        <Footer />
    </>;
}

export default PortfolioTwo;