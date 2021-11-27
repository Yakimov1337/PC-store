import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.js";
import { collection, getDocs } from "@firebase/firestore";
import { db } from '../../firebase'

export default function Marketplace() {
    require('./style.css');

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
        });
        setProducts(items);
        setLoading(false);

    }, [])


    if (loading) return <h1> Loading </h1>

    return (
        <section id="catalog-page">

            {products
                ? products.map(product => <ProductCard key={product._id} product={product} />)
                : <h3 className="no-articles">There are no available products right now!</h3>
            }
        </section>
    );
}