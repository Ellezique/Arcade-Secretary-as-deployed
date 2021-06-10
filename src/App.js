import React from 'react';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Rules from './Pages/Rules';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div className="App">
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Rules' component={Rules} />
            <Route path='/Contact' component={Contact} />
          </Switch>
        </Router> 
      </>
    </div>
  )
}

export default App
