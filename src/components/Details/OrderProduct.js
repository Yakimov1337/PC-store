import { useState, useEffect } from "react";
import { useAuth } from '../../contexts/AuthContext.js';
import { doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

export default function OrderProduct({
    match,
    product
}) {
    const deleteProduct = async (id) => {
        const productDoc = doc(db, "products", id);
        await deleteDoc(productDoc);
    }
    useEffect(async () => {
        product.quantity--;
        const productDoc = doc(db, "products", match.params.productId);
        let removeUnit = {
            quantity: product.quantity
        }
        await updateDoc(productDoc, removeUnit)

        if (product.quantity == 0) {
            // TURN ON LATER
            deleteProduct(product.id);
        }
    }, [])




    return (
        <div id="order" className="container mt-4 mb-4">
            <div className="row d-flex cart align-items-center justify-content-center">
                <div className="col-md-10">
                    <div className="">
                        <div className="d-flex justify-content-center border-bottom">
                            <div className="p-3">
                                <div className="progresses">
                                    <div className="steps"> <span><i className="fa fa-check" /></span> </div> <span className="line" />
                                    <div className="steps"> <span><i className="fa fa-check" /></span> </div> <span className="line" />
                                    <div className="steps"> <span className="font-weight-bold">3</span> </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0">
                            <div className="col-md-6 border-right p-5">
                                <div className="text-center order-details">
                                    <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
                                        <span className="check1"><i className="fa fa-check" /></span>
                                        <span className="font-weight-bold">Order Confirmed</span>
                                        <small className="mt-2">Your delivery will go to you soon</small>
                                        <a href="#" className="text-decoration-none invoice-link">View Invoice</a>
                                    </div> <Link to='/marketplace-type-all-brand-all' className="btn btn-danger btn-block order-button">Go back to marketplace</Link>
                                </div>
                            </div>
                            <div className="col-md-6 background-muted">
                                <div className="p-3 border-bottom">
                                    <div className="d-flex justify-content-between align-items-center"> <span>
                                        <i className="fa fa-clock-o text-muted" /> </span> <span><i className="fa fa-refresh text-muted" /> 2 Max Revisions</span> </div>
                                    <div className="mt-3">
                                        <h6 className="mb-0">Illustraion in Sketch or AI</h6> <span className="d-block mb-0">Includes: Sketch, PSD, PNG, SVG, AI </span> <small>Min: 1 illustraion</small>
                                        <div className="d-flex flex-column mt-3"> <small><i className="fa fa-check text-muted" /> Vector file</small> <small><i className="fa fa-check text-muted" /> Sources files</small> </div>
                                    </div>
                                </div>
                                <div className="row g-0 border-bottom">
                                    <div className="col-md-6 border-right">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>x3</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>$20 per unit</span> </div>
                                    </div>
                                </div>
                                <div className="row g-0 border-bottom">
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>Subtotal</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>$60</span> </div>
                                    </div>
                                </div>
                                <div className="row g-0 border-bottom">
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>Processing fees</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>$1.80</span> </div>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span className="font-weight-bold">Total</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span className="font-weight-bold">$61.80</span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div> </div>
                    </div>
                </div>
            </div>
        </div>

    )
}