import React, { useState } from 'react';
import { db } from '../../../firebase';
import { useHistory } from 'react-router';
import { doc, updateDoc, getDocs, where, query, collection } from '@firebase/firestore';
import { useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext';



export default function EditProduct({ match }) {
    require('./css/style.css');

    const history = useHistory();
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const userCollectionRef = collection(db, "users");
    const { userId, currentUser } = useAuth();

    useEffect(async () => {
        const q = query(userCollectionRef, where("email", "==", currentUser.email));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => setUser(({ id: doc.id, ...doc.data() })));

    }, []);

    const editUser = async (id, phoneNumber, address, imageUrl, city, zipCode) => {
        const userDoc = doc(db, "users", id)
        const newFields =
        {
            phoneNumber: Number(phoneNumber),
            address: address,
            imageUrl: imageUrl,
            city: city,
            zipCode: zipCode
        }
        await updateDoc(userDoc, newFields)
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { phoneNumber, address, imageUrl, city, zipCode } = Object.fromEntries(formData);

        await editUser(user.id, phoneNumber, address, imageUrl, city, zipCode);
        try {
            setError('');
            setLoading(true);
            history.push('/my-profile')

        } catch {
            setError('Failed to edit profile!');
        }
        setLoading(false);
    }



    return (
        <div>

            <div className="main">
                <section className="edit">
                    {/* <img src="images/signup-bg.jpg" alt=""> */}
                    <div className="container-reg">
                        <div className="signup-content" id="edit-profile-form">
                            <form method="POST" onSubmit={handleSubmit} id="edit-profile-form" className="signup-form form-auto">
                                <h2 className="form-title">Edit profile</h2>
                                <div className="form-group">
                                    <label className="label">Phone Number</label>
                                    <input type="text" className="form-input" name="phoneNumber" id="text" defaultValue={user.phoneNumber} maxLength="15"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="name">Image Url</label>
                                    <input type="imageUrl" className="form-input" name="imageUrl" id="imageUrl" placeholder="Image url"
                                        defaultValue={user.imageUrl}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="desc" >Address</label>
                                    <input type="description" className="form-input" name="address" id="address" placeholder="address"
                                        defaultValue={user.address} required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" form="desc" >City</label>
                                    <input type="description" className="form-input" name="city" id="city" placeholder="City" maxLength="10"
                                        defaultValue={user.city} required
                                    />
                                </div> <div className="form-group">
                                    <label className="label" form="desc" >Zip Code</label>
                                    <input type="description" className="form-input" name="zipCode" id="zipCode" placeholder="Zip Code" maxLength="5"
                                        defaultValue={user.zipCode} required
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit" name="AddProduct" className="form-submit" value="Edit profile"
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