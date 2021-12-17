import { Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.js';
import Footer from './components/Footer/Footer.js';
import ForgotPassword from './components/Sign/ForgotPassword/ForgotPassword.js';
import Header from './components/NavBar/NavBar';
import Login from './components/Sign/Login/Login.js';
import Home from './components/Home/Home';
import Marketplace from './components/Product/Marketplace/Marketplace.js';
import MyProfile from './components/User/MyProfile/MyProfile.js';
import Preloader from './components/Static/Preloader/Preloader';
import Register from './components/Sign/Register/Register.js';
import PrivateRoute from '../src/contexts/PrivateRoute.js';
import NotFound from './components/Static/404-NotFound/NotFound.js';
import About from './components/Static/About/About.js';
import AddProduct from './components/Product/AddProduct/Add.Product.js';
import EditProduct from './components/Product/Edit/EditProduct.js';
import EditProfile from './components/User/Edit-Profile/EditProfile.js';
import ContactUs from './components/Static/Contact-us/ContactUs.js';
import Services from './components/Static/Services-comp/Services.js';
import Team from './components/Static/Team/Team.js';
import ProductDetails from './components/Product/Details/ProductDetails.js';
import MyProducts from './components/User/MyProducts/MyProducts.js';
import OrderDetails from './components/Product/Order/OrderDetails.js';
import OrderReceipt from './components/Product/OrderReceipt/OrderReceipt.js';



function App() {

  return (
      <div>
        <AuthProvider>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/team' component={Team} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/marketplace-type-:categoryType-brand-:brandName' component={Marketplace} />
            <Route path='/product-:productId' component={ProductDetails} />
            <PrivateRoute path='/buy-:productId' component={OrderDetails} />
            <PrivateRoute path='/receipt-:productId' component={OrderReceipt} />
            <PrivateRoute path='/add-product' component={AddProduct} />
            <PrivateRoute path='/edit-my-profile' component={EditProfile} />
            <PrivateRoute path='/edit-:productId' component={EditProduct} />
            <PrivateRoute path='/my-profile' component={MyProfile} />
            <PrivateRoute path='/my-products' component={MyProducts} />
            <Route path="/" component={NotFound} />
          </Switch>
          <Footer />
          <Preloader />
        </AuthProvider>
      </div>
  );
}

export default App;
