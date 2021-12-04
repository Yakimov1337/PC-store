import React, { useState } from 'react';
import { db } from '../../firebase';
import { useHistory } from 'react-router';
import { doc, updateDoc, getDoc } from '@firebase/firestore';
import { useEffect } from 'react';


export default function EditProduct({ match }) {
    require('./css/style.css');
    const history = useHistory()
    const [currentProduct, setCurrentProduct] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true);
        const docRef = doc(db, "products", match.params.productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setCurrentProduct({ id: match.params.productId, ...docSnap.data() })
            setLoading(false);
        } else {
            console.log("No such product!");
        }
    }, [])

    const editProduct = async (id, headline, type, desc, imageUrl, price) => {
        const productDoc = doc(db, "products", id)
        const newFields =
        {
            headline: headline,
            type: type,
            description: desc,
            imageUrl: imageUrl,
            price: Number(price)
        }
        await updateDoc(productDoc, newFields)
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { headline, type, desc, imageUrl, price } = Object.fromEntries(formData);
        console.log( Object.fromEntries(formData));
        console.log(headline, type, desc, imageUrl, price);
        type = 'GPU'
        await editProduct(currentProduct.id, headline, type, desc, imageUrl, price);
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
                <section className="edit">
                    {/* <img src="images/signup-bg.jpg" alt=""> */}
                    <div className="container-reg">
                        <div className="signup-content" id="edit-product-form">
                            <form method="POST" onSubmit={handleSubmit} id="signup-form" className="signup-form form-auto">
                                <h2 className="form-title">Create offer</h2>
                                <div className="form-group">
                                    <label className="label">Headline</label>
                                    <input type="text" className="form-input" name="headline" id="text" defaultValue={currentProduct.headline} required
                                    />
                                </div>
                                <div className="form-group" form="type">
                                    <label className="label" form="name">Category</label>
                                    <select form="type" name="type">
                                        <option value="Motherboard">Motherboard</option>
                                        <option value="GPU">GPU</option>
                                        <option value="CPU">CPU</option>
                                        <option value="PSU">PSU</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="label" form="name">Image Url</label>
                                    <input type="imageUrl" className="form-input" name="imageUrl" id="imageUrl" placeholder="Image url"
                                        defaultValue={currentProduct.imageUrl} required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="desc" >Description</label>
                                    <input type="description" className="form-input" name="desc" id="description" placeholder="Description"
                                        defaultValue={currentProduct.description} required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="price">Price</label>
                                    <input type="Price" className="form-input" name="price" id="price" placeholder="Price"
                                        defaultValue={currentProduct.price}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit" name="AddProduct" className="form-submit" value="Edit product"
                                    // onClick={() => {editProduct( currentProduct.id)}} 
                                    />
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