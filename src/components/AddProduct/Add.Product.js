import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { useHistory } from 'react-router';
import { addDoc, collection } from '@firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';
import { Alert } from 'react-bootstrap';


export default function Register() {
    require('./css/style.css');
    let [newHeadline, setNewHeadline] = useState("");
    let [newType, setNewType] = useState("");
    let [newBrand, setNewBrand] = useState("");
    let [brands, setBrands] = useState([]);
    let [newDesc, setNewDesc] = useState("");
    let [newImageUrl, setNewImageUrl] = useState("");
    let [newPrice, setNewPrice] = useState(0);
    const [error, setError] = useState('');
    const [emptyCategory, setEmptyCategory] = useState(true);
    const [emptyBrand, setEmptyBrand] = useState(true);
    const [loading, setLoading] = useState(false);
    const { userId } = useAuth();

    const history = useHistory()
    const productsCollectionRef = collection(db, "products");

    async function getOptions(type) {
        if (type == "Motherboard") {
            setBrands(["ASRock", "Asus", "Biostar", "EVGA", "GIGABYTE", "MSI"]);
        } else if (type == "CPU") {
            setBrands(["Intel", "AMD"]);
        }
        else if (type == "PSU") {
            setBrands(["Corsair", "EVGA", "Thermaltake"]);
        } else if (type == "GPU") {
            setBrands(["Nvidia", "AMD", "Asus", "EVGA", "GIGABYTE", "MSI", "Sapphire"]);
        }
        return;
    }




    async function handleSubmit(e) {
        e.preventDefault();
        console.log(emptyBrand,emptyCategory);
        if (emptyBrand||emptyCategory) {
            return setError('Please select category and option!')
        }
        try {
            setError('');
            setLoading(true);
            await addDoc(productsCollectionRef,
                {
                    headline: newHeadline,
                    type: newType,
                    description: newDesc,
                    imageUrl: newImageUrl,
                    price: Number(newPrice),
                    author: userId,
                    brand: newBrand
                })
            history.push('/marketplace')

        } catch {
            setError('Failed to create a product!');
        }
        setLoading(false);
    }



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
                <section className="signup" id="add-product">
                    {/* <img src="images/signup-bg.jpg" alt=""> */}
                    <div className="container-reg">
                        <div className="signup-content" >
                            <form method="POST" onSubmit={handleSubmit} id="signup-form" className="signup-form form-auto">
                                <h2 className="form-title">Create offer</h2>
                                {/* <div className="form-group">
                                    <input type="text" className="form-input" name="name" id="name" placeholder="Your Name" />
                                </div> */}
                                {error && <Alert variant="danger"> {error}</Alert>}
                                <div className="form-group">
                                    <label className="label" form="headline">Headline</label>
                                    <input type="headline" className="form-input" name="email" id="email" placeholder="Product headline" required
                                        onChange={(event) => {
                                            setNewHeadline(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="name">Category</label>
                                    <select id='select-options' className='select-box' onChange={(event) => {
                                        setNewType(event.target.value);
                                        getOptions(event.target.value);
                                        setEmptyCategory(false);
                                    }} >
                                        <option value="emptyOption">Please select an option...</option>
                                        <option value="Motherboard">Motherboard</option>
                                        <option value="PSU">PSU</option>
                                        <option value="GPU">GPU</option>
                                        <option value="CPU">CPU</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="label" form="name">Brand</label>
                                    <select id='select-options' className='select-box' onChange={(event) => {
                                        setNewBrand(event.target.value);
                                        setEmptyBrand(false);
                                    }} >
                                        <option value="emptyOption">Please select an option...</option>
                                        {brands.map((brand, idx) => <option key={idx} value={brand} required>{brand}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="label" form="name">Image Url</label>
                                    <input type="imageUrl" className="form-input" name="imageUrl" id="imageUrl" placeholder="Image url" required
                                        onChange={(event) => {
                                            setNewImageUrl(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="name" >Description</label>
                                    <input type="description" className="form-input" name="description" id="description" placeholder="Description" required
                                        onChange={(event) => {
                                            setNewDesc(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="price">Price</label>
                                    <input type="Price" className="form-input" name="price" id="price" placeholder="Price" required
                                        onChange={(event) => {
                                            setNewPrice(event.target.value);
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit" name="AddProduct" className="form-submit" value="Add product" />
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