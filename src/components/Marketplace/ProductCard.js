import { Link } from "react-router-dom";

export default function Product({
    product
}) {
    return (
            <div className="product-card">
                <div className="imgBox">
                    <img src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" alt="mouse corsair" className="mouse" />
                </div>
                <div className="contentBox">

                    <h3>{product.name}</h3>
                    <h2 className="price">{product.price} €</h2>
                   <Link to={`/product/${product.id}`} className="buy">Details</Link>
                </div>
            </div>
    )
}