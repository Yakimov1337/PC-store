import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    require('./footer.style.css')
    const HandleSubmit = (e) => {
        e.preventDefault();
        setInput(<h6>You have successfully submitted for our newsletter, thank you!</h6>)    
    }

    let [input, setInput] = useState(<form onSubmit={HandleSubmit}><div><input type="email" name="email" /><input type="submit" value="Subscribe" /></div></form>);


    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info">
                                    <h3>PC-STORE<span>.</span></h3>
                                    <p>
                                        Площад Свобода 1 <br />
                                        Дупница 535022, България<br /><br />
                                        <strong>Phone: </strong> +1 5589 55488 55<br />
                                        <strong>Email: </strong> pc.store@stores.com<br />
                                    </p>
                                    <div className="social-links mt-3">
                                        <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                                        <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                                        <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                                        <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                                        <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/about">About us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/services">Services</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/team">Team</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/contact-us">Contacts</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/services">Advertising & Marketing</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/services">Game Tech</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/services">Media & Entertainment</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/services">Security and Identity</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/contact-us">Repair Services</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Subscribe to our newsletter and receive first hot offers and best deals products!</p>
                               
                                    {input}
                                
                                

                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Gp</span></strong>.All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>

        </div>
    )
};