import './App.css'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Navbar from './components/navbar';
import Index from './components'
import About from './components/about';
import Contact from './components/contact'
import ControlledCarousel from './components/carousel';


class App extends React.Component {
  render() {
    return (
       <Router>
          <ControlledCarousel />
           <div className="App">
              <div className="content">
                <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                </ul>
              </div>
          </div>
       </Router>
   );
  }
}
  
export default App;