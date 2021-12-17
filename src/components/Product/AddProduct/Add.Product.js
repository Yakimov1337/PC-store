import React, { useState } from 'react';
import { db } from '../../../firebase';
import { useHistory } from 'react-router';
import { addDoc, collection } from '@firebase/firestore';
import { useAuth } from '../../../contexts/AuthContext';
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
    let [newQuantity, setNewQuantity] = useState(0);
    const [error, setError] = useState('');
    const [emptyCategory, setEmptyCategory] = useState(true);
    const [emptyBrand, setEmptyBrand] = useState(true);
    const [loading, setLoading] = useState(false);
    const { userId } = useAuth();
    const history = useHistory()
    const productsCollectionRef = collection(db, "products");

    async function getOptions(type) {
        if (type === "Motherboard") {
            setBrands(["ASRock", "Asus", "Biostar", "EVGA", "GIGABYTE", "MSI"]);
        } else if (type === "CPU") {
            setBrands(["Intel", "AMD"]);
        }
        else if (type === "PSU") {
            setBrands(["Corsair", "EVGA", "Thermaltake"]);
        } else if (type === "GPU") {
            setBrands(["Nvidia", "AMD", "Asus", "EVGA", "GIGABYTE", "MSI", "Sapphire"]);
        }
        return;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(emptyBrand, emptyCategory);
        if (emptyBrand || emptyCategory) {
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
                    brand: newBrand,
                    stars: Number(0),
                    quantity: Number(newQuantity),
                    ratedUsers: []
                }).then(() => {
                    history.push('/marketplace-type-all-brand-all')
                })
        } catch {
            setError('Failed to create a product!');
        }
        setLoading(false);
    }

    if (loading) return <h1> Loading </h1>
    return (
        <div>
            <div className="main">
                <section className="signup" id="add-product">
                    <div className="container-reg">
                        <div className="signup-content" >
                            <forms id="signup-form" className="signup-form form-auto">
                                <h2 className="form-title">Create offer</h2>
                                {error && <Alert variant="danger"> {error}</Alert>}
                                <div className="form-group">
                                    <label className="label" form="headline">Headline</label>
                                    <input type="headline" className="form-input" name="headline" id="headline" placeholder="Product headline" required maxLength="35"
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
                                    <input type="description" className="form-input" name="description" id="description" placeholder="Description" required maxLength="150"
                                        onChange={(event) => {
                                            setNewDesc(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="Quantity">Quantity</label>
                                    <input type="number" className="form-input" name="Quantity" id="Quantity" placeholder="Quantity" required maxLength="3"
                                        onChange={(event) => {
                                            setNewQuantity(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="price">Price</label>
                                    <input type="number" className="form-input" name="price" id="price" placeholder="Price" required maxLength="5"
                                        onChange={(event) => {
                                            setNewPrice(event.target.value);
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input onClick={handleSubmit} type="submit" name="AddProduct" className="form-submit" value="Add product" />
                                </div>
                            </forms>
                        </div>
                    </div>
                </section>
            </div>
            {/* JS */}
            {/* This templates was made by Colorlib (https://colorlib.com) */}
        </div>
    );
}