import { Link } from "react-router-dom";

export default function OrderProduct({
    data,
    ...props
}) {
    require('./order-receipt.css');
    const firstName = props.location.data.firstName;
    const lastName = props.location.data.lastName;
    const city = props.location.data.city;
    const zipCode = props.location.data.zipCode;
    const phoneNumber = props.location.data.phoneNumber;
    const address = props.location.data.address;
    const deliveryTime = props.location.data.deliveryTime;
    const productPrice = props.location.data.productPrice;
    const vat = Number(productPrice*0.20);
    const totalSum = Number(vat+productPrice+1.80);
   


    

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
                                        <h6 className="mb-0">Dear, {firstName} {lastName}</h6>
                                        <span className="font-weight-bold">Order Confirmed </span>
                                        <small className="mt-2">Your delivery will go to you soon</small>
                                        <a href="#" className="text-decoration-none invoice-link">View Invoice</a>
                                    </div> <Link to='/marketplace-type-all-brand-all' className="btn btn-danger btn-block order-buttonn">Go back to marketplace</Link>
                                </div>
                            </div>
                            <div className="col-md-6 background-muted">
                                <div className="p-3 border-bottom">
                                    <div className="d-flex justify-content-between align-items-center"> <span>
                                        <i className="fa fa-clock-o text-muted" /> {deliveryTime}</span> <span><i className="fa fa-refresh text-muted" /> 1 Max Revisions</span> </div>
                                    <div className="mt-3">
                                        <h6 className="mb-0">{address}</h6> <span className="d-block mb-0">{city} </span><span className="d-block mb-0">+{phoneNumber} </span> <small>{zipCode}</small>
                                        <div className="d-flex flex-column mt-3"> <small><i className="fa fa-check text-muted" /> Secured delivery</small> <small><i className="fa fa-check text-muted" /> Item Insurance</small> <small><i className="fa fa-check text-muted" /> 3 Years Warranty</small></div>
                                    </div>
                                </div>
                                <div className="row g-0 border-bottom">
                                    <div className="col-md-6 border-right">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>Item Price</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>{productPrice}€ per unit</span> </div>
                                    </div>
                                </div>
                                <div className="row g-0 border-bottom">
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>VAT </span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>{vat}€</span> </div>
                                    </div>
                                </div>
                                <div className="row g-0 border-bottom">
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>Processing fees</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span>1.80€</span> </div>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span className="font-weight-bold">Total</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 d-flex justify-content-center align-items-center"> <span className="font-weight-bold">{totalSum}€</span> </div>
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