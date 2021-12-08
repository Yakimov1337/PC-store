import { useAuth } from '../../contexts/AuthContext';
import { collection, getDocs, doc, query, where } from "@firebase/firestore";
import { db } from '../../firebase'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export default function MyProfile() {
    require('./myprofile.style.css');
    let { currentUser } = useAuth();
    const [user, setUser] = useState('');
    const userCollectionRef = collection(db, "users");
    // const userCollectionRef = doc(db, "users", userId);

    let level = "Begginer";
    useEffect(async () => {
        const q = query(userCollectionRef, where("email", "==", currentUser.email));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => setUser(({ id: doc.id, ...doc.data() })));

    }, []);

    let imgUrl ='';
if (user.imageUrl == '') {
    imgUrl = "https://img.icons8.com/bubbles/100/000000/user.png";
}else {
    imgUrl = user.imageUrl;
}
console.log(user.imageUrl);
console.log(imgUrl);
    return (

        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-xl-6 col-md-12">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                    <div className="card-block text-center text-white">
                                        <div className="m-b-25"> <img  src={imgUrl} className="img-radius " alt="User-Profile-Image" /> </div>
                                        <h6 className="f-w-600">{user.username}</h6>
                                        <p>{level}</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Email</p>
                                                <h6 className="text-muted f-w-400">{user.email}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Phone</p>
                                                <h6 className="text-muted f-w-400">{user.phoneNumber}</h6>
                                            </div>
                                        </div>
                                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Delivery Address</h6>
                                        <h6 className="text-muted f-w-400">{user.address}</h6>

                                        <h6 className="text-muted f-w-400"></h6>

                                        <div className="row">
                                            <div className="edit-btn">
                                                <Link to='/edit-my-profile' className="cart-btn">Edit</Link>

                                            </div>

                                            {/* <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Username</p>
                                                <h6 className="text-muted f-w-400">{user.username}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Most Viewed</p>
                                                <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                            </div> */}
                                        </div>
                                        {/* <ul className="social-link list-unstyled m-t-40 m-b-10">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true" /></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true" /></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true" /></a></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
