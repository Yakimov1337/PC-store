import { Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.js';
import Header from './components/NavBar/NavBar';
import Login from './components/Login/Login.js';
import Home from './components/Home/Home';
import Marketplace from './components/Marketplace/Marketplace.js';
import MyProfile from './components/MyProfile/MyProfile.js';
import Preloader from './components/Preloader/Preloader';
import Register from './components/Register/Register.js';
import { AuthProvider } from './contexts/AuthContext.js';
import PrivateRoute from '../src/contexts/PrivateRoute.js';
import About from './components/About/About.js';
import AddProduct from './components/AddProduct/Add.Product.js';
import ContactUs from './components/Contact-us/ContactUs.js';
import Services from './components/Services-comp/Services.js';
import Team from './components/Team/Team.js';
import ProductDetails from './components/Details/ProductDetails.js';





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
          <Route path='/marketplace' component={Marketplace} />
          <Route path='/product/:productId' component={ProductDetails} />
          <Route path='/add-product' component={AddProduct} />
          <PrivateRoute path='/my-profile' component={MyProfile} />
        </Switch>
        <Footer />
        <Preloader />
      </AuthProvider>
    </div>
  );
}

export default App;
