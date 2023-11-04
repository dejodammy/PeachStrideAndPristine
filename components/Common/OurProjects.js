import React from 'react';
import Link from 'next/link';

const OurProjects = () => {
    return (
        <div className="portfolio-area bg-fff5ee pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Portfolio Showcase</span>
                    <h2>Our Impressive Portfolio</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
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

                    <div className="col-lg-4 col-md-6">
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

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-3.jpeg" alt="image" />
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

                    <div className="col-lg-4 col-md-6">
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

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-5.jpg" alt="image" />
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

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-6.jpeg" alt="image" />
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

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-7.jpg" alt="image" />
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

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-8.jpg" alt="image" />
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

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-9.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <i className='bx bx-plus'></i>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        Mobile App Development
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

export default OurProjects;