import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.js";
import { collection, getDoc, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../firebase.js";
import { useAuth } from "../../contexts/AuthContext.js";
import { Link } from "react-router-dom";



export default function MyProducts() {
    require('./myproducts.style.css');

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { userId } = useAuth();
    const productCollectionRef = collection(db, "products");



    useEffect(async () => {
        setLoading(true);
        const q = query(productCollectionRef, where("author", "==", userId));
        const querySnapshot = await getDocs(q);
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

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>My listed products</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>My listed products</li>
                        </ol>
                    </div>

                </div>
            </section>
            <section id="catalog-page">
                <div className="container">
                    {products.length > 0 && !loading
                        ? products.map(product => <ProductCard key={product.id} product={product} />)
                        : <h3 className="no-articles">You have no listed products!</h3>
                    }
                </div>
            </section>
        </div>
    );
}