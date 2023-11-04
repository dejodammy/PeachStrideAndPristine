import React from 'react';
import Link from 'next/link';

const PortfolioShowcase = () => {
    return (
        <div className="portfolio-area bg-f1f1f1 pt-100 pb-70">
            <div className="container-fluid">
                <div className="section-title">
                    <span>Portfolio Showcase</span>
                    <h2>Our Impressive Portfolio</h2>
                    <div className="bar"></div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-1.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <i className='bx bx-plus'></i>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        Creative Web Design
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-2.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <i className='bx bx-plus'></i>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        Web Development
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-3.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <i className='bx bx-plus'></i>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        Web Application
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-4.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <i className='bx bx-plus'></i>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        Dashboard App
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-large-1.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <i className='bx bx-plus'></i>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        Digital Agency
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-large-2.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <i className='bx bx-plus'></i>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        Website Development
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-large-3.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <i className='bx bx-plus'></i>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        Logo & Branding
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-large-4.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <i className='bx bx-plus'></i>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        App Development
                                    </Link>
                                </h3>
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
    );
}

export default PortfolioShowcase;