import React from 'react';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Rules from './Pages/Rules';
import Contact from './Pages/Contact';

const getBasename = path => path.substr(0, path.lastIndexOf('/'));
const App = () => {
  return (
    
    <div className="App" >
      <>
        <Router basename={getBasename(window.location.pathname)}>
          <NavBar />
          <Switch>
            <div  >
            <Route exact path='/' component={Home} />
            <Route path='/Rules' component={Rules} />
            <Route path='/Contact' component={Contact} />
            </div>
          </Switch>
        </Router> 
      </>
    </div>
  )
}

export default App
