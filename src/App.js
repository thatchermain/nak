import {BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route path='/' component={Home}></Route>
        </Switch>  
      </Router>      
    </div>
  );
}

export default App;
