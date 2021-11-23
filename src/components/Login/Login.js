import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';


export default function Login() {
    require('./css/style.css');
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/')

        }catch{
            setError('Failed to log in!');
        }
        setLoading(false);
    }


    return (
        <div>
            {/* Hello world
            <div className="awesome" style={{ border: '1px solid red' }}>
                <label htmlFor="name">Enter your name: </label>
                <input type="text" id="name" />
            </div>
            <p>Enter your HTML here</p> */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            {/* <h2 className="heading-section"></h2> */}
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="img" >
                                </div>
                                <div className="login-wrap p-4 p-md-5">
                                    <div className="d-flex">
                                        <div className="w-100">
                                            <h3 className="mb-4">Sign In</h3>
                                        </div>
                                        <div className="w-100">
                                            <p className="social-media d-flex justify-content-end">
                                                <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>

                                                <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                                            </p>
                                        </div>
                                    </div>
                                    <form action="#" onSubmit= {handleSubmit} className="signin-form">
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="name">Username</label>
                                            <input type="text" ref={emailRef} className="form-control" placeholder="Email" required />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="password">Password</label>
                                            <input type="password" ref={passwordRef} className="form-control" placeholder="Password" required />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" disabled={loading} className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                            <div className="w-50 text-left">
                                                <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right">
                                               <Link to="/forgot-password">Forgot Password</Link>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="text-center">Not a member? <Link data-toggle="tab" to="/register">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
