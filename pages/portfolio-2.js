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

                            <div className="portfolio-content">
                                <h3>
                                  
                                        Creative Work
                                   
                                </h3>
                                <span>Web Design</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                              

                                    <img src="/images/portfolio/portfolio-2.jpg" alt="image" />

                             
                            </div>

                            <div className="portfolio-content">
                                <h3>
                                
                                        Ecommerce Work
                                 
                                </h3>
                                <span>Creative Agency</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                              

                                    <img src="/images/portfolio/portfolio-3.jpeg" alt="image" />

                              
                            </div>

                            <div className="portfolio-content">
                                <h3>
                                   
                                        App Development
                                  
                                </h3>
                                <span>IOS Android</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                               

                                    <img src="/images/portfolio/portfolio-4.jpg" alt="image" />

                            
                            </div>

                            <div className="portfolio-content">
                                <h3>
                                  
                                        Dashboard App
                                   
                                </h3>
                                <span>Web Development</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                              

                                    <img src="/images/portfolio/portfolio-5.jpg" alt="image" />

                               
                            </div>

                            <div className="portfolio-content">
                                <h3>
                                   
                                        Web Application
                                  
                                </h3>
                                <span>Marketing</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                               

                                    <img src="/images/portfolio/portfolio-6.jpeg" alt="image" />

                              
                            </div>

                            <div className="portfolio-content">
                                <h3>
                                   
                                        Logo & Branding
                                  
                                </h3>
                                <span>Agency</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="pagination-area">
                            <a href="#" className="prev page-numbers">
                                <i className="flaticon-left-arrow"></i>
                            </a>
                            <a href="#" className="page-numbers">1</a>
                            <span className="page-numbers current" aria-current="page">2</span>
                            <a href="#" className="page-numbers">3</a>
                            <a href="#" className="page-numbers">4</a>
                            <a href="#" className="next page-numbers">
                                <i className="flaticon-next"></i>
                            </a>
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