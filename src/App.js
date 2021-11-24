import { Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer.js';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.js';
import Header from './components/Header';
import Login from './components/Login/Login.js';
import Main from './components/Main';
import MyProfile from './components/MyProfile/MyProfile.js';
import Preloader from './components/Preloader';
import PrivateRoute from './components/PrivateRoute.js';
import Register from './components/Register/Register.js';
import { AuthProvider } from './contexts/AuthContext.js';





function App() {
  return (
    <div>
      <AuthProvider>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <Route path = '/my-profile' component={MyProfile}/>
      </Switch>    
      <Footer />
      <Preloader />
      </AuthProvider>
    </div>
  );
}

export default App;
