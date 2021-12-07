import { useEffect, useState } from "react";
import ProductCard from "../ProductCard.js";
import { collection, getDocs, where, query } from "@firebase/firestore";
import { db } from "../../../firebase.js";



export default function allMotherboards() {
    require('../marketplace.style.css');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    
    async function clickHandler(e) {
        const q = getAllByType(e.target.textContent);
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
    }

    function getAllByType(type) {
        if (type=="All") {
            return collection(db, "products");
        }else if (type=="GPU"||"PSU"||"Motherboard"||"CPU"){
            return query(collection(db, "products"), where("type", "==", type));
        }else{
            return console.log("Wrong product TYPE!");
        }
    }
    useEffect(async () => {
        setLoading(true);
        const q = query(collection(db, "products"), where("type", "==", "Motherboard"));
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
    


    if (loading) return <h1> Loading </h1>

    return (
        <div >
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">
                    <div className="section-title-marketplace">
                        <h2>martkeplace</h2>

                    </div>
                </div>

            </section>
            <section id="marketplace" className="marketplace">
                <div className="container" data-aos="fade-up">
                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul onClick={clickHandler} id="marketplace-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">CPU</li>
                                <li data-filter=".filter-card">GPU</li>
                                <li data-filter=".filter-web">Motherboard</li>
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