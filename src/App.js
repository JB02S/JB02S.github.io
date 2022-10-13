import './App.css'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Navbar from './components/navbar';
import Index from './components'
import About from './components/about';
import Contact from './components/contact'


class App extends React.Component {
  render() {
    return (
       <Router>
           <div className="App">
            <div className="Container">
              <div id="IndexLink">
                <Link to="/">Home</Link>
              </div>
              <div id="ContactLink">
                <Link to="/about">Contact</Link>
              </div>
              <div id="AboutLink">
                <Link to="/contact">About</Link>
              </div>
            </div>
            <Routes>
                  <Route exact path='/' element={< Index />}></Route>
                  <Route exact path='/about' element={< About />}></Route>
                  <Route exact path='/contact' element={< Contact />}></Route>
            </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;