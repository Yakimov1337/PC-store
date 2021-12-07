export default function About() {
    require('./about.style.css');
    return (
        <div>
            <section id="about-title" className="about-title">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Why we are here</p>
                    </div>
                </div>
            </section>

            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src="assets/img/photo.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                            <h3>Welcome to PC-STORE, your number one source for digital products. We're dedicated to giving you the very best of digital world, with a focus on best marketplace on the web.</h3>
                            <p className="fst-italic">
                                Founded in 1996 by George Yakimov, PC-STORE has come a long way from its beginnings in Bulgaria.
                                When Geore first started out, his passion for leading digital marketplace
                                drove him to do tons of researches how to satisfy every user needs so that PC-STORE can offer you
                                the world most advanced store. We now serve customers all over the world,
                                and are thrilled that we're able to turn our passion into our own website.Since then PC-STORE expanded its services and now
                                offers not only great user experience while searching for digital product but also:
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line"></i> Computer Service & Repair.</li>
                                <li><i className="ri-check-double-line"></i> Cloud Services.</li>
                                <li><i className="ri-check-double-line"></i> Security & Identity</li>
                            </ul>
                            <p>
                            We hope you enjoy our products as much as we enjoy offering them to you.
                             If you have any questions or comments, please don't hesitate to contact us.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};