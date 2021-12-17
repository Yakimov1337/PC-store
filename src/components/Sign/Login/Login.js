import React, { useRef, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';



export default function Login() {
    require('./css/style.css');
    const emailRef = useRef();
    const passwordRef = useRef();

    const { login, loginWithFacebook } = useAuth();
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
        <div className="main">
            <section className="sign-in">
                {/* <img src="images/signup-bg.jpg" alt=""> */}
                <div className="container-reg" >
                    <div className="signup-content">
                        <div className="w-100">
                            <p className="social-media d-flex justify-content-end">
                                <button onClick={() => loginWithFacebook()} className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></button>
                            </p>
                        </div>
                        <form method="#" onSubmit={handleSubmit} id="sign-in-form" className="signin-form">
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
    );
}
