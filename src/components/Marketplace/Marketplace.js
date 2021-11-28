import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.js";
import { getFirestore, collection, getDoc, getDocs } from "@firebase/firestore";




export default function Marketplace() {
    require('./style.css');
    const db = getFirestore();
    
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
            // console.log(`${doc.id}`);
        });
        setProducts(items);
        setLoading(false);

    }, [])

    if (loading) return <h1> Loading </h1>

    return (
        <section id="catalog-page">
            {products.length > 0 && !loading
                ? products.map(product => <ProductCard key={product.id} product={product} />)
                : <h3 className="no-articles">There are no available products right now!</h3>
            }
        </section>
    );
}