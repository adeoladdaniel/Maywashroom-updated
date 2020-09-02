import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Price from './pages/Price';
import Order from './pages/Order';
import Navigation from './components/Navbar';
 import Foot from'./components/Footer';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.scss';


function App() {
  return (
    <Router>
    <div className="App">
    <Navigation/>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/price" component={Price} />
      <Route path="/order" component={Order} />
       <Foot/> 
    </div>
    </Router>
   
  );
}

export default App;
