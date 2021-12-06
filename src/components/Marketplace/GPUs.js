import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.js";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDoc, getDocs, where, query } from "@firebase/firestore";
import { db } from "../../firebase.js";



export default function GPUs() {
    require('./marketplace.style.css');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    async function  clickHandler(e) {
        const q = getAllByType(e.target.textContent);
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
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
        items.forEach(element => {
            console.log(element);
        });
    }
    
    function getAllByType(type) {
        return query(collection(db, "products"), where("type", "==", type));
    }
    useEffect(async () => {
        setLoading(true);
        const q = query(collection(db, "products"), where("type", "==", "GPU"));
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
        items.forEach(element => {
            console.log(element);
        });
    }, [])
    


    if (loading) return <h1> Loading </h1>

    return (
        <div >
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">
                    <div className="section-title-marketplace">
                        <h2>All GPUs</h2>

                    </div>
                </div>

            </section>
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">
                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul onClick={clickHandler} id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">CPU</li>
                                <li data-filter=".filter-card">GPU</li>
                                <li data-filter=".filter-web">MOTHERBOARD</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="catalog-page">
                <div className="container">
                    {products.length > 0 && !loading
                        ? products.map(product => <ProductCard key={product.id} product={product} />)
                        : <h3 className="no-articles">There are no available gpus right now!</h3>
                    }
                </div>
            </section>
        </div>
    );
}