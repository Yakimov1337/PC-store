import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ProductCard from "./ProductCard.js";
import { collection, getDocs, where, query } from "@firebase/firestore";
import { db } from "../../../firebase.js";



export default function GPUs() {
    require('./marketplace.style.css');
    const [products, setProducts] = useState([]);
    const [heading, setHeading] = useState("");
    const [loading, setLoading] = useState(false);
    const [className, setClassName] = useState("");
    const { categoryType, brandName } = useParams();

    async function clickHandler(e) {
        setHeading(e.target.textContent);
        const q = getAllByTypeAndBrand(e.target.textContent, "all");
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
    }

    function getAllByTypeAndBrand(category, brand) {
        if ((category == "all" || category == "All") && brand == "all") {
            setHeading("ALL LISTINGS");
            return collection(db, "products");
        }
        else if (category == "GPU" && brand == "all") {
            setHeading("ALL GPUs");
            return query(collection(db, "products"), where("type", "==", category));
        }
        else if (category == "GPU" && brand == "AMD") {
            setHeading("AMD GPUs");
            return query(collection(db, "products"), where("type", "==", category), where("brand", "==", brand));
        }
        else if (category == "GPU" && brand == "NVIDIA") {
            setHeading("NVIDIA GPUs");
            return query(collection(db, "products"), where("type", "==", category), where("brand", "==", brand));
        } else if (category == "Motherboard" && brand == "all") {
            setHeading("ALL MOTHERBOARDS");
            return query(collection(db, "products"), where("type", "==", category));
        } else if (category == "Motherboard" && brand == "ASRock") {
            setHeading("ASROCK MOTHERBOARDS");
            return query(collection(db, "products"), where("type", "==", category), where("brand", "==", brand));
        } else if (category == "Motherboard" && brand == "Asus") {
            setHeading("ASUS MOTHERBOARDS");
            return query(collection(db, "products"), where("type", "==", category), where("brand", "==", brand));
        } else if (category == "Motherboard" && brand == "MSI") {
            setHeading("MSI MOTHERBOARDS");
            return query(collection(db, "products"), where("type", "==", category), where("brand", "==", brand));
        } else if (category == "CPU" && brand == "all") {
            setHeading("ALL CPUs");
            return query(collection(db, "products"), where("type", "==", category));
        } else if (category == "PSU" && brand == "all") {
            setHeading("ALL PSUs");
            return query(collection(db, "products"), where("type", "==", category));
        }
        else {
            return console.log("Wrong product TYPE!");
        }
    }
    useEffect(async () => {
        setLoading(true);
        const querySnapshot = await getDocs(getAllByTypeAndBrand(categoryType, brandName));
        const items = [];
        querySnapshot.forEach((doc) => {
            let product = {
                id: doc.id,
                ...doc.data(),
            };
            items.push(product);
        });
        setProducts(items); setLoading(false);
    }, [brandName, categoryType])



    if (loading) return <h1> Loading </h1>

    return (
        <div >
            <section id="marketplace" className="marketplace">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <div className="section-title-marketplace">
                            <h2>{heading}</h2>
                        </div>
                    </div>
                </section>
                <div className="container" data-aos="fade-up">
                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul onClick={clickHandler} id="marketplace-flters">
                                <li data-filter="*">All</li>
                                <li data-filter=".filter-app">CPU</li>
                                <li data-filter=".filter-card">GPU</li>
                                <li data-filter=".filter-card">PSU</li>
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






// export default function Marketplace() {
//     require('./style.css');

//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(async () => {
//         setLoading(true);
//         const querySnapshot = await getDocs(collection(db, "products"));
//         const items = [];
//         querySnapshot.forEach((doc) => {
//             let product = {
//                 id: doc.id,
//                 ...doc.data(),
//             };
//             items.push(product);
//         });
//         setProducts(items);
//         setLoading(false);
//     }, [])

//     //WORKS BUT TAKES 1S TO RENDER ALL PRODUCTS IDK WHY
//     // useEffect(async()=> {
//     //     setLoading(true);
//     //     const getAllProducts = async () =>{
//     //         const data = await getDocs(collection(db,"products"));
//     //       setProducts(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
//     //     };
//     //     getAllProducts();
//     //     setLoading(false);
//     // },[]);

//     if (loading) return <h1> Loading </h1>

//     return (
//         <div >
//             <section id="breadcrumbs" className="breadcrumbs">
//                 <div className="container">
//                     <div className="section-title-marketplace">
//                         <h2>All listings</h2>
//                     </div>
//                 </div>
//             </section>
//             <section id="catalog-page">
//                 <div className="container">
//                     {products.length > 0 && !loading
//                         ? products.map(product => <ProductCard key={product.id} product={product} />)
//                         : <h3 className="no-articles">There are no available products right now!</h3>
//                     }
//                 </div>
//             </section>
//         </div>
//     );
// }