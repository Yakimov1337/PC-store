import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


export default function Register() {
    require('./css/style.css');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();



    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

           
            {/* Font Icon */}
            <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css" />
            {/* Main css */}
            <link rel="stylesheet" href="css/style.css" />
            <div className="main">
                <section className="signup">
                    {/* <img src="images/signup-bg.jpg" alt=""> */}
                    <div className="container-reg">
                        <div className="signup-content">
                            <form method="POST" id="signup-form" className="signup-form form-auto">
                                <h2 className="form-title">Create offer</h2>
                                {/* <div className="form-group">
                                    <input type="text" className="form-input" name="name" id="name" placeholder="Your Name" />
                                </div> */}
                                <div className="form-group">
                                    <label class="label" for="headline">Headline</label>
                                    <input type="headline" className="form-input" name="email" id="email" placeholder="Product headline" />
                                </div>
                                <div className="form-group">
                                    <label class="label" for="name">Category</label>
                                    <select >
                                        <option value="Motherboard">Motherboard</option>
                                        <option value="GPU">GPU</option>
                                        <option value="CPU">CPU</option>
                                        <option value="PSU">PSU</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label class="label" for="name">Image Url</label>
                                    <input type="imageUrl" className="form-input" name="imageUrl" id="imageUrl" placeholder="Image url" />
                                </div>
                                <div className="form-group">
                                    <label class="label" for="name">Description</label>
                                    <input type="description" className="form-input" name="description" id="description" placeholder="Description" />
                                </div>
                                <div className="form-group">
                                    <label class="label" for="price">Price</label>
                                    <input type="Price" className="form-input" name="price" id="price" placeholder="Price" />
                                </div>

                                <div className="form-group">
                                    <input type="submit" disabled={loading} name="AddProduct" id="submit" className="form-submit" defaultValue="Add product" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            {/* JS */}
            {/* This templates was made by Colorlib (https://colorlib.com) */}
        </div>
    );
}