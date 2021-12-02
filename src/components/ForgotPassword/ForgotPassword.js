import React, { useRef, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {Alert} from 'react-bootstrap';

export default function ForgotPassword() {   
    require('./css/style.css');

    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setMessage('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions!')
        }catch{
            setError('Failed to reset password!');
        }
        setLoading(false);
    }

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
                            <form method="POST" onSubmit= {handleSubmit} id="signup-form" className="signup-form">
                                <h2 className="form-title">Reset Password</h2>
                                {error&&<Alert variant="danger"> {error}</Alert>}
                                {message&&<Alert variant="success"> {message}</Alert>}
                                {/* <div className="form-group">
                                    <input type="text" className="form-input" name="name" id="name" placeholder="Your Name" />
                                </div> */}
                                <div className="form-group">
                                <label className="label" form="email">Email</label>
                                    <input type="email" ref={emailRef} className="form-input" name="email" id="email" placeholder="Your Email" required/>
                                </div>                           
                                <div className="form-group">
                                    <input type="submit" disabled={loading} name="submit" id="submit" className="form-submit" defaultValue="Sign up" />
                                </div>
                            </form>
                            <p className="loginhere">
                                Have already an account ? <Link to="/login" className="loginhere-link">Login here</Link>
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