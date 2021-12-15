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

    const editProduct = async (id, headline, desc, imageUrl, price, quantity) => {
        const productDoc = doc(db, "products", id)
        const newFields =
        {
            headline: headline,
            description: desc,
            imageUrl: imageUrl,
            price: Number(price),
            quantity: Number(quantity)
        }
        await updateDoc(productDoc, newFields)
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { headline, desc, imageUrl, price, quantity } = Object.fromEntries(formData);

        await editProduct(currentProduct.id, headline, desc, imageUrl, price, quantity);
        try {
            setError('');
            setLoading(true);
            history.push(`/product-${match.params.productId}`)

        } catch {
            setError('Failed to edit a product!');
        }
        setLoading(false);
    }

    return (
        <div>

            <div className="main">
                <section className="edit">
                    {/* <img src="images/signup-bg.jpg" alt=""> */}
                    <div className="container-reg">
                        <div className="signup-content" id="edit-product-form">
                            <form method="POST" onSubmit={handleSubmit} id="edit-product-form" className="signup-form form-auto">
                                <h2 className="form-title">Edit product</h2>
                                <div className="form-group">
                                    <label className="label">Headline</label>
                                    <input type="text" className="form-input" name="headline" id="text" defaultValue={currentProduct.headline} required maxLength="35"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="name">Image Url</label>
                                    <input type="imageUrl" className="form-input" name="imageUrl" id="imageUrl" placeholder="Image url"
                                        defaultValue={currentProduct.imageUrl} required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="desc" >Description</label>
                                    <input type="description" className="form-input" name="desc" id="description" placeholder="Description" maxLength="150"
                                        defaultValue={currentProduct.description} required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="quantity">Quantity</label>
                                    <input type="quantity" className="form-input" name="quantity" id="quantity" placeholder="quantity" maxLength="3"
                                        defaultValue={currentProduct.quantity}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="price">Price</label>
                                    <input type="Price" className="form-input" name="price" id="price" placeholder="Price" maxLength="5"
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