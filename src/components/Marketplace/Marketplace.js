import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard.js";
import { getFirestore, collection, getDoc, getDocs } from "@firebase/firestore";
import { db } from "../../firebase.js";



export default function Marketplace() {
    require('./style.css');

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = [];
        querySnapshot.forEach((doc) => {
            let product = {
                id: doc.id,
                ...doc.data(),
            };
            items.push(product);
        });
        setProducts(items);
        setLoading(false);
    }, [])

    //WORKS BUT TAKES 1S TO RENDER ALL PRODUCTS IDK WHY
    // useEffect(async()=> {
    //     setLoading(true);
    //     const getAllProducts = async () =>{
    //         const data = await getDocs(collection(db,"products"));
    //       setProducts(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    //     };
    //     getAllProducts();
    //     setLoading(false);
    // },[]);

    if (loading) return <h1> Loading </h1>

    return (
        <div >
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">
                    <div className="section-title-marketplace">
                        <h2>All listings</h2>
                    </div>
                </div>
            </section>
            <section id="catalog-page">
                <div className="container">
                    {products.length > 0 && !loading
                        ? products.map(product => <ProductCard key={product.id} product={product} />)
                        : <h3 className="no-articles">There are no available products right now!</h3>
                    }
                </div>
            </section>
        </div>
    );
}