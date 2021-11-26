export default function Product({
    product
}) {
    return (
        <div>
            <div className="product-card">
                <div className="imgBox">
                    <img src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" alt="mouse corsair" className="mouse" />
                </div>
                <div className="contentBox">
                    <h3>{product.name}</h3>
                    <h2 className="price">{product.price} €</h2>
                    <a href="#" className="buy">Details</a>
                </div>

            </div>
        </div>
    )
}