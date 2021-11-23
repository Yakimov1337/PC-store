export default function Register() {
    require('./css/style.css');
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        
            <title>Sign Up Form by Colorlib</title>
            {/* Font Icon */}
            <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css" />
            {/* Main css */}
            <link rel="stylesheet" href="css/style.css" />
            <div className="main">
                <section className="signup">
                    {/* <img src="images/signup-bg.jpg" alt=""> */}
                    <div className="container-reg">
                        <div className="signup-content">
                            <form method="POST" id="signup-form" className="signup-form">
                                <h2 className="form-title">Create account</h2>
                                <div className="form-group">
                                    <input type="text" className="form-input" name="name" id="name" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-input" name="email" id="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-input" name="password" id="password" placeholder="Password" />
                                    <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-input" name="re_password" id="re_password" placeholder="Repeat your password" />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" id="submit" className="form-submit" defaultValue="Sign up" />
                                </div>
                            </form>
                            <p className="loginhere">
                                Have already an account ? <a href="/login" className="loginhere-link">Login here</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            {/* JS */}
            {/* This templates was made by Colorlib (https://colorlib.com) */}
        </div>
    );
}