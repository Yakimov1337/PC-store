import { Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer.js';
import Header from './components/Header';
import Login from './components/Login/Login.js';
import Main from './components/Main';
import Preloader from './components/Preloader';
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
      </Switch>    
      <Footer />
      <Preloader />
      </AuthProvider>
    </div>
  );
}

export default App;
