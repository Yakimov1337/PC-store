import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext.js';
import { Link, useHistory } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function Header() {
  require('./navbar.style.css')
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError('');

    try {
      await logout();
      history.push('/login');

    } catch {
      setError('Failed to log out!')
    }
  }

  let button;
  let myProfile;
  let addProductBtn;
  if (currentUser) {
    myProfile = <li className="dropdown"><Link to="/my-profile"><span>{currentUser.email}</span> <i className="bi bi-chevron-down"></i></Link>
      <ul>
        <li><Link to="/my-profile">My profile</Link></li>
        <li><Link to="/my-products">My products</Link></li>
      </ul>
    </li>
    // myProfile = <li><Link className="nav-link  " to="/my-profile">{currentUser.email}</Link></li>
    addProductBtn = <li className="add-btn"><Link className="nav-link" to="/add-product"><span className="fa fa-cart-plus add-btn" />Add Product</Link></li>
    button = <Link to="/login" onClick={handleLogOut} className="get-started-btn ">Log out</Link>
  } else {
    button = <Link to="/login" className="get-started-btn ">Get Started</Link>
    myProfile = ''
    addProductBtn = '';
  }


  return (
    <header id="header" className="fixed-top ">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="container d-flex align-items-center justify-content-lg-between">

        <h1 className="logo me-auto me-lg-0"><Link to="/">Pc store<span>.</span></Link></h1>



        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
            <li><Link className="nav-link scrollto" to="/about">About</Link></li>
            <li><Link className="nav-link scrollto" to="/services">Services</Link></li>

            <li className="dropdown"><Link to="/marketplace-type-all-brand-all"><span>Marketplace</span> <i className="bi bi-chevron-down"></i></Link>
              <ul>
                <li className="dropdown"><Link to="/marketplace-type-GPU-brand-all"><span>Graphic cards</span> <i className="bi bi-chevron-right"></i></Link>
                  <ul>
                    <li><Link to="/marketplace-type-GPU-brand-all">All GPUs</Link></li>
                    <li><Link to="/marketplace-type-GPU-brand-NVIDIA">NVIDIA</Link></li>
                    <li><Link to="/marketplace-type-GPU-brand-AMD">AMD</Link></li>
                  </ul>
                </li>

                <li className="dropdown"><Link to="/marketplace-type-Motherboard-brand-all"><span>Motherboards</span> <i className="bi bi-chevron-right"></i></Link>
                  <ul>
                    <li><Link to="/marketplace-type-Motherboard-brand-all">All Motherboards</Link></li>
                    <li><Link to="/marketplace-type-Motherboard-brand-ASRock">ASRock</Link></li>
                    <li><Link to="/marketplace-type-Motherboard-brand-Asus">ASUS</Link></li>
                    <li><Link to="/marketplace-type-Motherboard-brand-MSI">MSI</Link></li>
                  </ul>
                </li>
                <li><Link to="/marketplace-type-CPU-brand-all">CPUs</Link></li>
                <li><Link to="/marketplace-type-PSU-brand-all">PSUs</Link></li>
              </ul>
            </li>

            <li><Link className="nav-link scrollto" to="/team">Team</Link></li>
            <li><Link className="nav-link scrollto" to="/contact-us">Contact</Link></li>
            {addProductBtn}
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