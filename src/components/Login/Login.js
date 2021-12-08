import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';



export default function Login() {
    require('./css/style.css');
    const emailRef = useRef();
    const passwordRef = useRef();

    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true);
            login(emailRef.current.value, passwordRef.current.value)
                .then((res) => {
                    setLoading(false);
                    history.push('/');
                })
                .catch(err => {
                    setLoading(false);
                    setError('Wrong credentials!');
                })


        } catch (err) {
            console.log('catch');
        }
    }



    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

            <title>Sign Up Form by Colorlib</title>
            {/* Font Icon */}
            <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            {/* Main css */}
            <link rel="stylesheet" href="css/style.css" />
            <div className="main">
                <section className="sign-in">
                    {/* <img src="images/signup-bg.jpg" alt=""> */}
                    <div className="container-reg" >
                        <div className="signup-content">

                            <form method="#" onSubmit={handleSubmit} id="sign-in-form" className="signin-form">
                                <div className="w-100">
                                    <p className="social-media d-flex justify-content-end">
                                        <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>

                                        <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                                    </p>
                                </div>
                                <h2 className="form-title">Log In</h2>
                                {error && <Alert variant="danger"> {error}</Alert>}
                                {/* {message && <Alert variant="success"> {message}</Alert>} */}
                                <div className="form-group">
                                    <label className="label" form="email">Email</label>
                                    <input type="email" ref={emailRef} className="form-input" name="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="password">Password</label>
                                    <input type="password" ref={passwordRef} className="form-input" name="password" id="password" placeholder="Password" required />
                                    <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password" />
                                </div>

                                <div className="form-group">
                                    <input type="submit" disabled={loading} name="submit" id="submit" className="form-submit" value="Sign in" />
                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="w-50 text-left">
                                        <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="w-50 text-md-right fgtPW">
                                        <Link to="/forgot-password">Forgot Password</Link>
                                    </div>
                                </div>
                            </form>

                            <p className="text-center">Not a member? <Link data-toggle="tab" to="/register">Sign Up</Link></p>
                        </div>
                    </div>
                </section>
            </div>
            {/* JS */}
            {/* This templates was made by Colorlib (https://colorlib.com) */}
        </div>




        // <div>
        //     {/* Hello world
        //     <div className="awesome" style={{ border: '1px solid red' }}>
        //         <label htmlFor="name">Enter your name: </label>
        //         <input type="text" id="name" />
        //     </div>
        //     <p>Enter your HTML here</p> */}
        //     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

        //     <section className="ftco-section">
        //         <div className="container">
        //             <div className="row justify-content-center">
        //                 <div className="col-md-6 text-center mb-5">
        //                     {/* <h2 className="heading-section"></h2> */}
        //                 </div>
        //             </div>
        //             <div className="row justify-content-center">
        //                 <div className="col-md-12 col-lg-10">
        //                     <div className="wrap d-md-flex">
        //                         <div className="img" >
        //                         </div>
        //                         <div className="login-wrap p-4 p-md-5">
        //                             <div className="d-flex">
        //                                 <div className="w-100">
        //                                     <h3 className="mb-4">Sign In</h3>
        //                                 </div>
        //                                 <div className="w-100">
        //                                     <p className="social-media d-flex justify-content-end">
        //                                         <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>

        //                                         <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
        //                                     </p>
        //                                 </div>
        //                             </div>
        //                             <form action="#" onSubmit= {handleSubmit} className="signin-form form-auto">
        //                                 <div className="form-group mb-3">
        //                                     <label className="label" htmlFor="name">Username</label>
        //                                     <input type="text" ref={emailRef} className="form-control" placeholder="Email" required />
        //                                 </div>
        //                                 <div className="form-group mb-3">
        //                                     <label className="label" htmlFor="password">Password</label>
        //                                     <input type="password" ref={passwordRef} className="form-control" placeholder="Password" required />
        //                                 </div>
        //                                 <div className="form-group">
        //                                     <button type="submit" disabled={loading} className="form-control btn btn-primary rounded submit px-3">Sign In</button>
        //                                 </div>
        //                                 <div className="form-group d-md-flex">
        //                                     <div className="w-50 text-left">
        //                                         <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
        //                                             <input type="checkbox" defaultChecked />
        //                                             <span className="checkmark" />
        //                                         </label>
        //                                     </div>
        //                                     <div className="w-50 text-md-right">
        //                                        <Link to="/forgot-password">Forgot Password</Link>
        //                                     </div>
        //                                 </div>
        //                             </form>
        //                             <p className="text-center">Not a member? <Link data-toggle="tab" to="/register">Sign Up</Link></p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>
    );
}
