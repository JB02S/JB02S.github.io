import './App.css'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Navbar from './components/navbar';
import Index from './components'
import About from './components/about';
import Contact from './components/contact'
import Projects from './components/projects';
import FTXTradingBotsDesc from './components/ftxtradingbotsdesc';
import OnlyProfitsDesc from './components/onlyprofitsdesc';
import EportfolioDesc from './components/eportfoliodesc';
import MatrixCalculatorDesc from './components/matrixcalculatordesc';
import RaceCarDesc from './components/racecardesc';


class App extends React.Component {
  render() {
    return (
       <Router>
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
                    <li>
                      <Link to="/projects">Projects</Link>
                    </li>
                </ul>
              </div>
              <Routes>
                    <Route exact path='/' element={< Index />}></Route>
                    <Route exact path='/about' element={< About />}></Route>
                    <Route exact path='/contact' element={< Contact />}></Route>
                    <Route exact path='/projects' element={< Projects />}></Route>
                    <Route exact path='/projects/tradingbots' element={< FTXTradingBotsDesc />}></Route>
                    <Route exact path='/projects/onlyprofits' element={< OnlyProfitsDesc />}></Route>
                    <Route exact path='/projects/eportfolio' element={< EportfolioDesc />}></Route>
                    <Route exact path='/projects/racecar' element={< RaceCarDesc />}></Route>
                    <Route exact path='/projects/matrixcalculator' element={< MatrixCalculatorDesc />}></Route>
              </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;