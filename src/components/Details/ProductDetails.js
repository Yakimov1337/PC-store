import { useState, useEffect } from "react";
import { useAuth } from '../../contexts/AuthContext.js';
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";



export default function ProductDetails({ match }) {
    require('./style.css');
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const { userId } = useAuth();

    useEffect(async () => {
        setLoading(true);
        const docRef = doc(db, "products", match.params.productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setProduct({id: match.params.productId,...docSnap.data()})
            setLoading(false);
        } else {
            console.log("No such document!");
        }
    }, [])




    const deleteProduct = async (id) => {
        const productDoc = doc(db, "products", id);
        await deleteDoc(productDoc);
    }
    let userOptionsDiv = <div>
        <span>{product.price}</span>
        <a href="#" className="cart-btn">Add to cart</a>
    </div>
    // console.log(userId);
    // console.log(product);
    // console.log(product.author);
    if (userId === product.author) {
        userOptionsDiv =
            <div className="product-price">
                <Link to={`/edit/${match.params.productId}`} product={product} className="cart-btn">Edit</Link>
                <Link to="/marketplace" onClick={() => { deleteProduct(product.id) }} className="cart-btn-delete">Delete</Link>
            </div>;
    }
    return (
        <div className="div-container-details">
            <div className="left-column">
                <img className="game-img" src={product.imageUrl} />
                <img data-image="blue" src="images/blue.png" alt="" />
                <img data-image="red" className="active" src="images/red.png" alt="" />
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
        </div >
    );
};