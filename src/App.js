import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import Consulting from './Components/Pages/Consulting';
import ContactUs from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import SignUp from './Components/Pages/SignUp';
import Marketing from './Components/Pages/Marketing';
function App() {
  return (
    <Router>
     <NavBar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/services' exact component={Services} />
       <Route path='/products' exact component={Products} />
       <Route path='/contact-us' exact component={ContactUs} />
       <Route path='/sign-up' exact component={SignUp} />
       <Route path='/marketing' exact component={Marketing} />
       <Route path='/consulting' exact component={Consulting} />
     </Switch>
    </Router>
  );
}

export default App;
