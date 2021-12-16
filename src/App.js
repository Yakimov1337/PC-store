import { Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.js';
import Footer from './components/Footer/Footer.js';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.js';
import Header from './components/NavBar/NavBar';
import Login from './components/Login/Login.js';
import Home from './components/Home/Home';
import Marketplace from './components/Marketplace/Marketplace.js';
import MyProfile from './components/MyProfile/MyProfile.js';
import Preloader from './components/Preloader/Preloader';
import Register from './components/Register/Register.js';
import PrivateRoute from '../src/contexts/PrivateRoute.js';
import NotFound from './components/404-NotFound/NotFound.js';
import About from './components/About/About.js';
import AddProduct from './components/AddProduct/Add.Product.js';
import EditProduct from './components/Edit/EditProduct.js';
import EditProfile from './components/Edit-Profile/EditProfile.js';
import ContactUs from './components/Contact-us/ContactUs.js';
import Services from './components/Services-comp/Services.js';
import Team from './components/Team/Team.js';
import ProductDetails from './components/Details/ProductDetails.js';
import MyProducts from './components/MyProducts/MyProducts.js';
import OrderDetails from './components/Order/OrderDetails.js';
import OrderReceipt from './components/OrderReceipt/OrderReceipt.js';



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
