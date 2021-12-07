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
import ContactUs from './components/Contact-us/ContactUs.js';
import Services from './components/Services-comp/Services.js';
import Team from './components/Team/Team.js';
import ProductDetails from './components/Details/ProductDetails.js';
import MyProducts from './components/MyProducts/MyProducts.js';
import GPUs from './components/Marketplace/GPU/GPUs.js';
import NVIDIA from './components/Marketplace/GPU/NVIDIA';
import AMD from './components/Marketplace/GPU/AMD';
import ASUS from './components/Marketplace/Motherboard/ASUS';
import ASRock from './components/Marketplace/Motherboard/ASRock';
import MOTHERBOARDS from './components/Marketplace/Motherboard/All';
import MSI from './components/Marketplace/Motherboard/MSI';
import CPU from './components/Marketplace/CPU/All';
import PSU from './components/Marketplace/PSU/All';










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
          <Route exact path='/marketplace-all-gpus' component={GPUs} />
          <Route exact path='/marketplace-all-motherboards' component={MOTHERBOARDS} />
          <Route exact path='/marketplace-all-cpu' component={CPU} />
          <Route exact path='/marketplace-all-psu' component={PSU} />
          <Route exact path='/marketplace-nvidia' component={NVIDIA} />
          <Route exact path='/marketplace-amd' component={AMD} />
          <Route exact path='/marketplace-asrock' component={ASRock} />
          <Route exact path='/marketplace-msi' component={MSI} />
          <Route exact path='/marketplace-asus' component={ASUS} />
          <Route path='/product-:productId' component={ProductDetails} />
          <PrivateRoute path='/add-product' component={AddProduct} />
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
