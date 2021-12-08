import { useState, useEffect } from "react";
import { useAuth } from '../../contexts/AuthContext.js';
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";



export default function ProductDetails({ match }) {
    require('./productDetails.style.css');
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState(false);
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

    const deleteProduct = async (id) => {
        const productDoc = doc(db, "products", id);
        await deleteDoc(productDoc);
    }

    // Order submit
    const buyNowHandler = async (e) => {
        e.preventDefault();
        // TURN ON LATER
        // deleteProduct(product.id);
        setOrder(true);

    }
    let buyNow =
        <div id="order" className="container mt-4 mb-4">
            <div className="row d-flex cart align-items-center justify-content-center">
                <div className="col-md-10">
                    <div className="">
                        <div className="d-flex justify-content-center border-bottom">
                            <div className="p-3">
                                <div className="progresses">
                                    <div className="steps"> <span><i className="fa fa-check" /></span> </div> <span className="line" />
                                    <div className="steps"> <span><i className="fa fa-check" /></span> </div> <span className="line" />
                                    <div className="steps"> <span className="font-weight-bold">3</span> </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0">
                            <div className="col-md-6 border-right p-5">
                                <div className="text-center order-details">
                                    <div className="d-flex justify-content-center mb-5 flex-column align-items-center"> <span className="check1"><i className="fa fa-check" /></span> <span className="font-weight-bold">Order Confirmed</span> <small className="mt-2">Your illustraion will go to you soon</small> <a href="#" className="text-decoration-none invoice-link">View Invoice</a> </div> <button className="btn btn-danger btn-block order-button">Go to your Order</button>
                                </div>
                            </div>
                            <div className="col-md-6 background-muted">
                                <div className="p-3 border-bottom">
                                    <div className="d-flex justify-content-between align-items-center"> <span><i className="fa fa-clock-o text-muted" /> 3 days delivery</span> <span><i className="fa fa-refresh text-muted" /> 2 Max Revisions</span> </div>
                                    <div className="mt-3">
                                        <h6 className="mb-0">Illustraion in Sketch or AI</h6> <span className="d-block mb-0">Includes: Sketch, PSD, PNG, SVG, AI </span> <small>Min: 1 illustraion</small>
                                        <div className="d-flex flex-column mt-3"> <small><i className="fa fa-check text-muted" /> Vector file</small> <small><i className="fa fa-check text-muted" /> Sources files</small> </div>
                                    </div>
                                </div>
                                <div className="row g-0 border-bottom">
                                    <div className="col-md-6 border-right">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>x3</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>$20 per unit</span> </div>
                                    </div>
                                </div>
                                <div className="row g-0 border-bottom">
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>Subtotal</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>$60</span> </div>
                                    </div>
                                </div>
                                <div className="row g-0 border-bottom">
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>Processing fees</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>$1.80</span> </div>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span className="font-weight-bold">Total</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span className="font-weight-bold">$61.80</span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div> </div>
                    </div>
                </div>
            </div>
        </div>



    let userOptionsDiv =
        <div>
            <span>{product.price}</span>
            {userId
                ? <button onClick={buyNowHandler} className="cart-btn">Buy now</button>
                : ""
            }
        </div>



    // console.log(userId);
    // console.log(product);
    // console.log(product.author);
    // Author check
    if (userId === product.author) {
        userOptionsDiv =
            <div className="product-price">
                <Link to={`/edit-${match.params.productId}`} product={product} className="cart-btn">Edit</Link>
                <Link to="/marketplace" onClick={() => { deleteProduct(product.id) }} className="cart-btn-delete">Delete</Link>
            </div>;
    }

    return (
        <div className="div-container-details-all">
            {order
                ? buyNow
                :

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
                                    <button>Express </button>
                                    <button>Normal</button>
                                    <button>Same day</button>
                                </div>
                                <a href="#">How to configurate your headphones</a>
                            </div>
                        </div>

                        <div className="product-price">
                            {userOptionsDiv}
                        </div>
                    </div>
                </div>

            }
        </div>

    );
};