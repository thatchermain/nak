import {BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import CheckUp from './components/CheckUp';
import AirConditioning from './components/AirConditioning';
import Repair from './components/Repair';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { render } from '@testing-library/react';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/stacja' component={CheckUp}></Route>
          <Route path='/klima' component={AirConditioning}></Route>
          <Route path='/mechanika' component={Repair}></Route>
          <Route path='/galeria' component={Gallery}></Route>
          <Route path='/kontakt' component={Contact}></Route>         
        </Switch>         
      </div>
    </Router>      
  );
}

export default App;
