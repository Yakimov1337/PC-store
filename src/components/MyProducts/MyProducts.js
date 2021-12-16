import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.js";
import { collection, getDoc, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../firebase.js";
import { useAuth } from "../../contexts/AuthContext.js";

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

    //WORKS BUT TAKES 1S TO RENDER ALL PRODUCTS 
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
            <section id="my-profile" className="my-profile">
            <div className="container" data-aos="fade-up">
                <div id="my-products" className="section-title">
                    <h2>Products</h2>
                    <p>My listed products</p>
                </div>
                </div>
            </section>
            <section id="catalog-page">
                <div className="container">
                    {products.length > 0 && !loading
                        ? products.map(product => <ProductCard key={product.id} product={product} />)
                        : <h3 id="my-products" className="no-articles">You have no listed products!</h3>
                    }
                </div>
            </section>
        </div>
    );
}