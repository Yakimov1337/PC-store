import { useState, useEffect } from "react";
import { doc, getDocs, collection, where } from "firebase/firestore";
import { db } from "../../firebase";


export default function ProductDetails({ match }) {
    require('./style.css');
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    console.log(match.params.productId);
    useEffect(async () => {
        const items = [];
        const querySnapshot = await getDocs(collection(db, "products"));

        // const getProduct = async () => {
        //     setLoading(true);
        //     const data = await getDoc(collection(db, "products"));
        //     setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        //     // setProduct(data.docs.where(data.doc.id==match.params.id));
        // }
        // getProduct();

        querySnapshot.forEach((doc) => {
            let product = { id: doc.id, ...doc.data() };

            if (doc.id==match.params.productId) {
                items.push(product);
            }
        });
        setLoading(false);
    }, [])



    return (
        <div className="div-container">
            <div className="left-column">
                <img data-image="black" src="images/black.png" alt="" />
                <img data-image="blue" src="images/blue.png" alt="" />
                <img data-image="red" className="active" src="images/red.png" alt="" />
            </div>

            <div className="right-column">

                <div className="product-description">
                    <span>Headphones</span>
                    <h1>Beats EP</h1>
                    <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
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
                        <span>Cable configuration</span>
                        <div className="cable-choose">
                            <button>Straight</button>
                            <button>Coiled</button>
                            <button>Long-coiled</button>
                        </div>
                        <a href="#">How to configurate your headphones</a>
                    </div>
                </div>

                <div className="product-price">
                    <span>148$</span>
                    <a href="#" className="cart-btn">Add to cart</a>
                </div>
            </div>
        </div >
    );
};