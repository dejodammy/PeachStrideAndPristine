import React from 'react';
import Link from 'next/link';

const LatestBlogPost = () => {
    return (
        <div className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Blog</span>
                    <h2>Latest News From Blog</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog">
                            <div className="image">
                                <Link href="/blog-details">

                                    <img src="/images/blog/blog-1.jpg" alt="image" />

                                </Link>
                            </div>
                            <div className="content">
                                <span>20 March, 2020</span>
                                <h3>
                                    <Link href="/blog-details">
                                        7 Great Tips For Earn More Money From Digital Industry
                                    </Link>
                                </h3>
                                <Link href="/blog-details" className="blog-btn">
                                    Read More<i className='bx bx-chevrons-right'></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog">
                            <div className="image">
                                <Link href="/blog-details">

                                    <img src="/images/blog/blog-2.jpg" alt="image" />

                                </Link>
                            </div>
                            <div className="content">
                                <span>25 March, 2020</span>
                                <h3>
                                    <Link href="/blog-details">
                                        How To Boost Your Digital Marketing Agency
                                    </Link>
                                </h3>
                                <Link href="/blog-details" className="blog-btn">
                                    Read More<i className='bx bx-chevrons-right'></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog">
                            <div className="image">
                                <Link href="/blog-details">

                                    <img src="/images/blog/blog-3.jpg" alt="image" />

                                </Link>
                            </div>
                            <div className="content">
                                <span>28 March, 2020</span>
                                <h3>
                                    <Link href="/blog-details">
                                        The Billionaire Guide On Design That will Get You Rich
                                    </Link>
                                </h3>
                                <Link href="/blog-details" className="blog-btn">
                                    Read More<i className='bx bx-chevrons-right'></i>
                                </Link>
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

export default LatestBlogPost;