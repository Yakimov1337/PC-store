import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.js";
import { getAll } from '../../services/productService.js';

export default function Marketplace() {
    require('./style.css');

    let [products, setProduct] = useState([]);

    useEffect(async ()=> {
        let result = await getAll();
        setProduct(result);
    },[])

    return (
        <section id="catalog-page">
            
            {products.length > 0
                ? products.map(product => <ProductCard key={product._id} product={product} />)
                : <h3 className="no-articles">There are no available products right now!</h3>
            }
        </section>
    );
}