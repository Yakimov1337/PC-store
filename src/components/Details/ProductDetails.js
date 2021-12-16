import { useState, useEffect } from "react";
import { useAuth } from '../../contexts/AuthContext.js';
import { doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";




export default function ProductDetails({ match }) {
    require('./productDetails.style.css');
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [rated, setRated] = useState(false);
    const [stars, setStars] = useState();
    const [deliveryTime, setDeliveryTime] = useState("Normal - 3 days delivery");
    const { userId } = useAuth();

    useEffect(async () => {
        setLoading(true);
        const docRef = doc(db, "products", match.params.productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setProduct({ id: match.params.productId, ...docSnap.data() })
            setLoading(false);
        } else {
            console.log("No such document!");
        }

    }, [])

    //Works but re-work it later
    if (Object.keys(product).length > 0) {
        console.log(product);
        if (product.ratedUsers.includes(userId) && rated == false) {
            setRated(true)
        }
    }

    const deleteProduct = async (id) => {
        const productDoc = doc(db, "products", id);
        await deleteDoc(productDoc);
    }

    //FIX THIS 
    const addStars = async (id) => {
        const productDoc = doc(db, "products", id);
        let count = Number(product.stars) + Number(stars);
        console.log(count);
        let addStars = {
            stars: Number(count),
            ratedUsers: [userId],
        }
        await updateDoc(productDoc, addStars)
    }
    let buttonsBasedOnUser =
        <div>
            <span>{product.price} € </span>
            {userId
                ? <Link to={{ pathname: `/buy-${match.params.productId}`, data: { deliveryTime, productPrice: product.price } }} className="cart-btn">Buy now</Link>
                : ""
            }
        </div >

    if (userId === product.author) {
        buttonsBasedOnUser =
            <div className="product-price">
                <Link to={`/edit-${match.params.productId}`} product={product} className="cart-btn">Edit</Link>
                <Link to="/marketplace-type-all-brand-all" onClick={() => { deleteProduct(product.id) }} className="cart-btn-delete">Delete</Link>
            </div>;
    }


    let productRating =
        <div className="rate">
            <h6>This product has rate of {product.stars} stars!⭐</h6>
        </div>


    let starsHtml =
        <div className="rate">
            <h6>This item has rate of {product.stars} stars!⭐</h6>
            {rated
                ? <h6>Your vote has been submitted!</h6>
                : <>
                    <input type="radio" id="star5" name="rate" value="5"
                        onClick={(event) => {
                            setStars(event.target.value);
                            addStars(match.params.productId);
                            setRated(true);
                        }} />
                    <label htmlFor="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4"
                        onClick={(event) => {
                            setStars(event.target.value);
                            addStars(match.params.productId);
                            setRated(true);
                        }} />
                    <label htmlFor="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3"
                        onClick={(event) => {
                            setStars(event.target.value);
                            addStars(match.params.productId);
                            setRated(true);
                        }} />
                    <label htmlFor="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2"
                        onClick={(event) => {
                            setStars(event.target.value);
                            addStars(match.params.productId);
                            setRated(true);
                        }} />
                    <label htmlFor="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1"
                        onClick={(event) => {
                            setStars(event.target.value);
                            addStars(match.params.productId);
                            setRated(true);
                        }} />
                    <label htmlFor="star1" title="text">1 star</label>
                </>
            }

        </div>


    if (loading) return <h1> Loading </h1>
    return (
        <div className="div-container-details-all">
            <div className="div-container-details">
                <div className="left-column ">
                    <img className="game-img" src={product.imageUrl} />
                </div>

                <div className="right-column">

                    <div className="product-description">
                        <span>{product.type}</span>

                        <h1>{product.headline}</h1>
                        <p>{product.description}</p>
                    </div>

                    <div className="product-configuration">

                        <div className="product-color">
                            <span>Color</span>
                            <div className="color-choose">
                                <div>
                                    <input data-image="red" type="radio" id="red" name="color" defaultValue="red" defaultChecked />
                                    <label htmlFor="red"><span /></label>
                                </div>
                                <div>
                                    <input data-image="blue" type="radio" id="blue" name="color" defaultValue="blue" />
                                    <label htmlFor="blue"><span /></label>
                                </div>
                                <div>
                                    <input data-image="black" type="radio" id="black" name="color" defaultValue="black" />
                                    <label htmlFor="black"><span /></label>
                                </div>
                            </div>
                        </div>



                        <div className="cable-config">
                            <span>Delivery options</span>
                            <div className="cable-choose">
                                <button onClick={(event) => {
                                    setDeliveryTime("Express - 1 day delivery")
                                }}>Express </button>
                                <button onClick={(event) => {
                                    setDeliveryTime("Normal - 3 days delivery")
                                }}>Normal</button>
                                <button onClick={(event) => {
                                    setDeliveryTime("Same day delivery")
                                }}>Same day</button>
                            </div>
                            <a href="#">Check our order policy</a>
                        </div>
                    </div>

                    <div className="product-price">
                        {buttonsBasedOnUser}
                        {userId && userId != product.author
                            ? starsHtml
                            : ''
                        }
                        {!userId
                            ? productRating
                            : ''
                        }
                    </div>
                </div>
            </div>
        </div >

    );
};