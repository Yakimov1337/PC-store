import React, { useState } from 'react';
import { db } from '../../firebase';
import { useHistory } from 'react-router';
import { addDoc, collection, doc, updateDoc,getDocs } from '@firebase/firestore';
import { useEffect } from 'react';


export default function EditProduct({ match }) {
    require('./css/style.css');
    const history = useHistory()
    const [newHeadline, setNewHeadline] = useState("");
    const [newType, setNewType] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newImageUrl, setNewImageUrl] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const [currentProduct, setCurrentProduct] = useState('');
    useEffect(async()  => {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            let product = { id: doc.id, ...doc.data()};
            if (match.params.productId === product.id) setCurrentProduct(product);
        });
    },[])

    const editProduct = async (id) => {
        const productDoc = doc(db, "products", id)
        const newFields =
        {
            headline: newHeadline,
            type: newType,
            description: newDesc,
            imageUrl: newImageUrl,
            price: Number(newPrice)
        }
        await updateDoc(productDoc, newFields)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);

            history.push('/marketplace')

        } catch {
            setError('Failed to edit a product!');
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
                <section className="signup">
                    {/* <img src="images/signup-bg.jpg" alt=""> */}
                    <div className="container-reg">
                        <div className="signup-content">
                            <form method="POST" onSubmit={handleSubmit} id="signup-form" className="signup-form form-auto">
                                <h2 className="form-title">Create offer</h2>
                                <div className="form-group">
                                    <label className="label" form="headline">Headline</label>
                                    <input type="headline" className="form-input" name="email" id="email" value={currentProduct.headline}
                                        onChange={(event) => {
                                            setNewHeadline(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="name">Category</label>
                                    <select onSelect={(event) => {
                                        setNewType(event.target.value);
                                    }} >
                                        <option value="Motherboard">Motherboard</option>
                                        <option value="GPU">GPU</option>
                                        <option value="CPU">CPU</option>
                                        <option value="PSU">PSU</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="label" form="name">Image Url</label>
                                    <input type="imageUrl" className="form-input" name="imageUrl" id="imageUrl" placeholder="Image url"
                                        onChange={(event) => {
                                            setNewImageUrl(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="name" >Description</label>
                                    <input type="description" className="form-input" name="description" id="description" placeholder="Description"
                                        onChange={(event) => {
                                            setNewDesc(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="price">Price</label>
                                    <input type="Price" className="form-input" name="price" id="price" placeholder="Price"
                                        onChange={(event) => {
                                            setNewPrice(event.target.value);
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit" name="AddProduct" className="form-submit" value="Edit product"
                                        onClick={() => {editProduct( currentProduct.id)}} />
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