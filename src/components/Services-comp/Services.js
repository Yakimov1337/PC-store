export default function Services() {
    require('./services.style.css')
    return (
        <div>

            <section id="features" className="features">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Cloud </h2>
                        <p>Check our Cloud Services</p>
                    </div>
                    <div className="row">
                        <div className="image col-lg-6" style={{ backgroundImage: 'url(assets/img/data-center.jpg)' }} data-aos="fade-right"></div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                            <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                                <i className="bx bx-receipt"></i>
                                <h4>Advertising & Marketing</h4>
                                <p>Unmatched cloud capabilities and partner opportunities to help customers reinvent first-party data platforms, data sharing, advertising platforms, advertising intelligence, and customer experience in the post-identifier era</p>
                            </div>
                            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                                <i className="bx bx-cube-alt"></i>
                                <h4>Game Tech</h4>
                                <p>We have everything you need to build faster, run smarter, and grow your games—find out why 90% of the world’s biggest public game companies are using PC STORE</p>
                            </div>
                            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                                <i className="bx bx-images"></i>
                                <h4>Media & Entertainment</h4>
                                <p>The most purpose-built capabilities of any cloud to help customers transform content production, media supply chain, broadcast, direct-to-consumer & streaming, and analytics</p>
                            </div>
                            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                                <i className="bx bx-shield"></i>
                                <h4>Security and Identity</h4>
                                <p>Securely manage access to services and resources</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};