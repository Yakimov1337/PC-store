import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext.js';


export default function Main() {
    require('./home.style.css')
    const { currentUser } = useAuth();

    let button = '';
    if (currentUser) {
        button = <Link className="cta-btn" to="/marketplace-type-all-brand-all">Explore now</Link>
    } else {
        button = <Link className="cta-btn" to="/login">Sign Up</Link>
    }
    return (
        <div id='home'>
            <div >
                <section id="hero" className="d-flex align-items-center justify-content-center">
                    <div className="container" data-aos="fade-up">

                        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                            <div className="col-xl-6 col-lg-8">
                                <h1>Powerful Digital Solutions By PC Store<span>.</span></h1>
                                <h2>We are team of talented digital marketers</h2>
                            </div>
                        </div>

                        <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                            <div className="col-xl-2 col-md-4">
                                <div className="icon-box">
                                    <i className='bx bx-store'></i>
                                    <h3><Link to="/marketplace">Biggest Marketplace</Link></h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-bar-chart-box-line"></i>
                                    <h3><Link to="/services">Financial Service</Link></h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-calendar-todo-line"></i>
                                    <h3><Link to="/services">Analytics</Link></h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-paint-brush-line"></i>
                                    <h3><Link to="/services">Repair Service</Link></h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-database-2-line"></i>
                                    <h3><Link to="/services">Storage</Link></h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <main id="main">

                <section id="services" className="services">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Services</h2>
                            <p>Check our Services</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon"><i className='bx bx-store'></i></div>
                                    <h4><Link to="/marketplace-type-all-brand-all">Marketplace</Link></h4>
                                    <p>PC Store Marketplace makes it simple to buy and sell new and used things locally or from businesses. Find great prices on new things delivered straight to your home from retailers.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon"><i className='bx bx-cloud' ></i></div>
                                    <h4><Link to="/services">Cloud services</Link></h4>
                                    <p>
                                        Whether you're looking for compute power, database storage, content delivery, or other functionality, We have the services to help you build sophisticated applications with increased flexibility, scalability and reliability
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box">
                                    <div className="icon"><i className='bx bx-chip' ></i></div>
                                    <h4><Link to="/services">Computer & Laptop Repair</Link></h4>
                                    <p>Troubleshooting home and business computers, laptops, networks, internet, viruses, operating systems, all hardware and software. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cta" className="cta">
                    <div className="container" data-aos="zoom-in">

                        <div className="text-center">
                            <h3>Get Started</h3>
                            <p> Explore our biggest and trusted marketplace.Find solution for your business.Satisfy your needs.</p>

                            {button}

                        </div>

                    </div>
                </section>


                <section id="portfolio" className="portfolio">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Products</h2>
                            <p>Check our latest Products</p>
                        </div>

                        <div className="row" data-aos="fade-up" data-aos-delay="100">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-app">CPU</li>
                                    <li data-filter=".filter-card">GPU</li>
                                    <li data-filter=".filter-web">MOTHERBOARD</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Web 2</h4>
                                        <p>Web</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>App</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Card 1</h4>
                                        <p>Card</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Card 3</h4>
                                        <p>Card</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="counts" className="counts">
                    <div className="container" data-aos="fade-up">

                        <div className="row no-gutters">
                            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100"></div>
                            <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
                                <div className="content d-flex flex-column justify-content-center">
                                    <h3>Computer Service & Laptop Repair</h3>
                                    <p>
                                        Troubleshooting home and business computers, laptops, networks, internet, viruses, operating systems, all hardware and software.

                                        We fix problems with home and business computers, laptops, servers, networks and Internet access. Perform quality service and troubleshoot hardware and software problems with any computer. Remove malware (viruses, Trojans, worms, etc.), information security, network security, creating data backup.
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className="bi bi-emoji-smile"></i>
                                                <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" className="purecounter"></span>
                                                <p><strong>Happy Clients</strong>   loyalty and happiness have a tendency to spread. </p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className="bi bi-journal-richtext"></i>
                                                <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2" className="purecounter"></span>
                                                <p><strong>Fast</strong> delivery and warranty by our happy employees.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className="bi bi-clock"></i>
                                                <span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="4" className="purecounter"></span>
                                                <p><strong>Years of experience</strong> in digital marketing satisfying clients. </p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className="bi bi-award"></i>
                                                <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="4" className="purecounter"></span>
                                                <p><strong>Awards</strong> and nominations for the fast growing and trusted digital marketplace.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="testimonials" className="testimonials">
                    <div className="container" data-aos="zoom-in">

                        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                        <h3>Geroge Yakimov</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            I’m responsible for this company. I stand behind the results. I know the details, and I think the CEO has to be the moral leader of the company, … I think high standards are good, but let’s not anybody be confused, it’s about performance with integrity. That’s what you have to do.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section id="clients" className="clients">
                    <div className="container aos-init aos-animate" data-aos="zoom-in">
                        <div className="clients-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                            <div className="swiper-wrapper align-items-center" id="swiper-wrapper-1a109f910989c94d16" aria-live="off" style={{ transform: 'translate3d(-2124px, 0px, 0px)', transitionDuration: '0ms' }}><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index={2} role="group" aria-label="3 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={3} role="group" aria-label="4 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index={4} role="group" aria-label="5 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={5} role="group" aria-label="6 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={6} role="group" aria-label="7 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={7} role="group" aria-label="8 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide" data-swiper-slide-index={0} role="group" aria-label="1 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide" data-swiper-slide-index={1} role="group" aria-label="2 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index={2} role="group" aria-label="3 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={3} role="group" aria-label="4 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide swiper-slide-next" data-swiper-slide-index={4} role="group" aria-label="5 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide" data-swiper-slide-index={5} role="group" aria-label="6 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide" data-swiper-slide-index={6} role="group" aria-label="7 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide" data-swiper-slide-index={7} role="group" aria-label="8 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={0} role="group" aria-label="1 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={1} role="group" aria-label="2 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index={2} role="group" aria-label="3 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={3} role="group" aria-label="4 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index={4} role="group" aria-label="5 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={5} role="group" aria-label="6 / 8" style={{ width: '116px', marginRight: '120px' }}><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div></div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                                <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 1" />
                                <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" />
                                <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" />
                                <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 4" />
                                <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 5" />
                                <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 6" />
                                <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 7" />
                                <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 8" />
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                    </div>
                </section>



            </main>
        </div>
    );
};