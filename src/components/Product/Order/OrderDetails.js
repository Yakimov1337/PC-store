import { useState, useEffect } from "react";
import { useAuth } from '../../../contexts/AuthContext.js';
import { doc, deleteDoc, getDoc, updateDoc, getDocs, where, query, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import { Redirect } from "react-router-dom"


export default function OrderDetails({
    match,
    ...props
}) {
    require('./order-details.css')
    let { currentUser } = useAuth();
    const [product, setProduct] = useState({});
    const [user, setUser] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [data, setData] = useState({});
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(false);
    const deliveryTime = props.location.data.deliveryTime;
    const productPrice = props.location.data.productPrice;

    useEffect(async () => {
        //Get current product
        setLoading(true);
        const docRef = doc(db, "products", match.params.productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setProduct({ id: match.params.productId, ...docSnap.data() })
            setLoading(false);
        } else {
            console.log("No such document!");
        }
        //Get current User
        const userCollectionRef = collection(db, "users");
        const q = query(userCollectionRef, where("email", "==", currentUser.email));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => setUser(({ id: doc.id, ...doc.data() })));
    }, [])


    const deleteProduct = async (id) => {
        const productDoc = doc(db, "products", id);
        await deleteDoc(productDoc);
    }


    // Order submit
    async function placeOrderHandler(e) {
        e.preventDefault();
        product.quantity--;
        const productDoc = doc(db, "products", match.params.productId);
        let removeUnit = {
            quantity: product.quantity
        }
        await updateDoc(productDoc, removeUnit)

        if (product.quantity == 0) {
            // TURN ON LATER
            deleteProduct(product.id);
        }


        let formData = new FormData(e.target);
        let { firstName, lastName, address, city, zipCode, phoneNumber } = Object.fromEntries(formData)
        setData({
            firstName,
            lastName,
            address,
            city,
            zipCode,
            phoneNumber,
            deliveryTime,
            productPrice
        })
        setRedirect(true);
    }
    if (redirect) {
        return <Redirect to={{ pathname: `/receipt-${match.params.productId}`, data: data }} />
    }

    const checkboxHandler = async (e) => {
        e.preventDefault();
        setAddress(user.address);
        setCity(user.city);
        setPhoneNumber(user.phoneNumber);
        setZipCode(user.zipCode);
    }

    if (loading) return <h1> Loading </h1>
    return (
        <div className="order-container">
            <div className="center">
                <h1>Shipping</h1>
                <p>Please enter your shipping details.</p>
            </div>
            <div className="checkbox-and-text">
                <div className="checkbox">
                    <input type="checkbox" id="checkbox1" onChange={checkboxHandler} />
                    <label htmlFor="checkbox1" />
                </div>
                <h6>Use my profile delivery information</h6>
            </div>
            <form method="POST" onSubmit={placeOrderHandler} className="order-form">
                <div className="order-form">
                    <div className="fields fields--2">
                        <label className="field">
                            <span className="field__label" htmlFor="firstName">First name</span>
                            <input className="field__input" type="text" name="firstName" id="firstName" placeholder="Name" required maxLength="15" />
                        </label>
                        <label className="field">
                            <span className="field__label" htmlFor="lastName">Last name</span>
                            <input className="field__input" type="text" name="lastName" placeholder="Last Name" required maxLength="15" />
                        </label>
                    </div>
                    <label className="field">
                        <span className="field__label" htmlFor="address">Address</span>
                        <input className="field__input" type="text" name="address" defaultValue={address} required maxLength="35" />
                    </label>
                    <label className="field">
                        <span className="field__label" htmlFor="country">Country</span>
                        <select className="field__input" id="country">
                            <option value="Bulgaria">Bulgaria</option>
                            <option value />
                        </select>
                    </label>
                    <div className="fields fields--3">
                        <label className="field">
                            <span className="field__label" htmlFor="zipCode">Zip code</span>
                            <input className="field__input" type="text" name="zipCode" defaultValue={zipCode} required maxLength="15" />
                        </label>
                        <label className="field">
                            <span className="field__label" htmlFor="city">City</span>
                            <input className="field__input" type="text" name="city" defaultValue={city} required maxLength="15" />
                        </label>
                        <label className="field">
                            <span className="field__label" htmlFor="phoneNumber">Phone Number</span>
                            <input className="field__input" type="text" name="phoneNumber" defaultValue={phoneNumber} required maxLength="15" />
                        </label>
                    </div>
                </div>
                <button type="submit" className="button">Place Order</button>
            </form >
        </div >
    )
}