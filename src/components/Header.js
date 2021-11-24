import React, {useState} from 'react';
import {useAuth} from '../contexts/AuthContext.js';
import { Link,useHistory } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function Header() {
  const[error,setError] = useState("");
  const {currentUser, logout} = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError('');

    try{
      await logout();
      history.push('/login');

    }catch {
      setError('Failed to log out!')
    }
  }

  let button;
  let myProfile;
  if (currentUser) {
    myProfile =    <li><a className="nav-link scrollto " href="#portfolio">{currentUser.email}</a></li>
           
    button= <Link to="/login" onClick={handleLogOut} className="get-started-btn scrollto">Log out</Link>
  }else{
    button= <Link to="/login" className="get-started-btn scrollto">Get Started</Link>
    myProfile =  <li><a className="nav-link scrollto " href="#portfolio">My Profile</a></li>
  }


    return (
      <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-lg-between">

        <h1 className="logo me-auto me-lg-0"><a href="/">Pc store<span>.</span></a></h1>



        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active" href="/">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            
            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
           {myProfile}
           
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        {button}
      
        



      </div>
    </header>

      );
}

export default Header;