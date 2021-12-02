import { collection, addDoc, getDocs } from '@firebase/firestore';
import { db } from '../../firebase';
import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Alert } from 'react-bootstrap';


export default function Register() {
    require('./css/style.css');

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup, currentUser } = useAuth();
    const history = useHistory();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const allUsersEmails = [];
    
    const getAllUsers = async () => {
        const querySnapshot = await getDocs(userCollectionRef);
        querySnapshot.forEach((doc) => allUsersEmails.push(doc.data().email));
    }

    const userCollectionRef = collection(db, "users");

    const createUser = async () => {
        await addDoc(userCollectionRef,
            {
                email: email,
                username: username,
                products: [],
            })
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match!')
        }
        
        await getAllUsers();
        if (allUsersEmails.includes(emailRef.current.value)) {
            console.log("here");
            return setError('This email already exists!')
        }


        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/');

        } catch {
            setError('Failed to create an account!');
        }
        createUser();
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
                            <form method="POST" onSubmit={handleSubmit} id="signup-form" className="signup-form form-auto">
                                <h2 className="form-title">Create account</h2>
                                {/* <div className="form-group">
                                    <input type="text" className="form-input" name="name" id="name" placeholder="Your Name" />
                                </div> */}
                                <div className="form-group">
                                    {error && <Alert variant="danger"> {error}</Alert>}
                                    <label className="label" form="username">Username</label>
                                    <input type="username" className="form-input" name="username" id="username" placeholder="Username"
                                        required
                                        onChange={(event) => {
                                            setUsername(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="email">Email</label>
                                    <input type="email" ref={emailRef} className="form-input" name="email" id="email" placeholder="Your Email"
                                        required
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="password">Password</label>
                                    <input type="password" ref={passwordRef} className="form-input" name="password" id="password" placeholder="Password" required />
                                    <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password" />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="password">Repeat password</label>
                                    <input type="password" ref={passwordConfirmRef} className="form-input" name="re_password" id="re_password" placeholder="Repeat your password" required />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group">
                                    <input type="submit" disabled={loading} name="submit" id="submit" className="form-submit" value="Sign up" />
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