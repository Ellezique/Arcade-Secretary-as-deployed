import React from 'react';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="App">
        <Router>
          <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/rules'  component={Rules} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
        </Router> 
    </div>
  )
}

export default App
