import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 200,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-next'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
};

const ImpressivePortfolio = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="portfolio-area pb-100">
            <div className="container-fluid">
                <div className="section-title">
                    <span>Portfolio Showcase</span>
                    <h2>Our Impressive Portfolio</h2>
                    <div className="bar"></div>
                </div>

                {display ? <OwlCarousel 
                    className="portfolio-slider owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="single-portfolio-item">
                        <div className="portfolio-image">
                            <Link href="/portfolio-details">

                                <img src="/images/portfolio/portfolio-1.jpg" alt="image" />

                            </Link>
                        </div>

                        <div className="portfolio-content">
                            <h3>
                                <Link href="/portfolio-details">
                                    Creative Work
                                </Link>
                            </h3>
                            <span>Web Design</span>
                        </div>
                    </div>

                    <div className="single-portfolio-item">
                        <div className="portfolio-image">
                            <Link href="/portfolio-details">

                                <img src="/images/portfolio/portfolio-2.jpg" alt="image" />

                            </Link>
                        </div>

                        <div className="portfolio-content">
                            <h3>
                                <Link href="/portfolio-details">
                                    Ecommerce Work
                                </Link>
                            </h3>
                            <span>Creative Agency</span>
                        </div>
                    </div>

                    <div className="single-portfolio-item">
                        <div className="portfolio-image">
                            <Link href="/portfolio-details">

                                <img src="/images/portfolio/portfolio-3.jpg" alt="image" />

                            </Link>
                        </div>

                        <div className="portfolio-content">
                            <h3>
                                <Link href="/portfolio-details">
                                    App Development
                                </Link>
                            </h3>
                            <span>IOS Android</span>
                        </div>
                    </div>

                    <div className="single-portfolio-item">
                        <div className="portfolio-image">
                            <Link href="/portfolio-details">

                                <img src="/images/portfolio/portfolio-4.jpg" alt="image" />

                            </Link>
                        </div>

                        <div className="portfolio-content">
                            <h3>
                                <Link href="/portfolio-details">
                                    Dashboard App
                                </Link>
                            </h3>
                            <span>Web Development</span>
                        </div>
                    </div>

                    <div className="single-portfolio-item">
                        <div className="portfolio-image">
                            <Link href="/portfolio-details">

                                <img src="/images/portfolio/portfolio-5.jpg" alt="image" />

                            </Link>
                        </div>

                        <div className="portfolio-content">
                            <h3>
                                <Link href="/portfolio-details">
                                    Web Application
                                </Link>
                            </h3>
                            <span>Marketing</span>
                        </div>
                    </div>

                    <div className="single-portfolio-item">
                        <div className="portfolio-image">
                            <Link href="/portfolio-details">

                                <img src="/images/portfolio/portfolio-6.jpg" alt="image" />

                            </Link>
                        </div>

                        <div className="portfolio-content">
                            <h3>
                                <Link href="/portfolio-details">
                                    Logo & Branding
                                </Link>
                            </h3>
                            <span>Agency</span>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    );
}

export default ImpressivePortfolio;