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
    myProfile =    <li><a className="nav-link scrollto " href="/my-profile">{currentUser.email}</a></li>
    button= <Link to="/login" onClick={handleLogOut} className="get-started-btn scrollto">Log out</Link>
  }else{
    button= <Link to="/login" className="get-started-btn scrollto">Get Started</Link>
    myProfile=''
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
            
            <li className="dropdown"><Link to="/marketplace"><span>Marketplace</span> <i className="bi bi-chevron-down"></i></Link>
              <ul>
                <li className="dropdown"><Link to="/marketplace"><span>Graphic cards</span> <i className="bi bi-chevron-right"></i></Link>
                  <ul>
                    <li><Link to="/marketplace">All GPUs</Link></li>
                    <li><Link to="/marketplace">NVIDIA</Link></li>
                    <li><Link to="/marketplace">AMD</Link></li>
              
                    
                  </ul>
                </li>
                <li><Link to="/marketplace">Motherboards</Link></li>
                <li><Link to="/marketplace">CPUs</Link></li>
                <li><Link to="/marketplace">PSUs</Link></li>
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