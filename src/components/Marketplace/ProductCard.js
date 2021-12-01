import { Link } from "react-router-dom";

export default function Product({
    product
}) {
    return (
            <div className="product-card">
                <div className="imgBox">
                    <img src={product.imageUrl} alt="No Image" className="mouse" />
                </div>
                <div className="contentBox">

                    <h3>{product.headline}</h3>
                    <h3 className="price">{product.price} €</h3>
                   <Link to={`/product/${product.id}`} className="buy">Details</Link>
                </div>
            </div>
    )
}