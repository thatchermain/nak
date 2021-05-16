import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import CheckUp from './pages/CheckUp';
import AirConditioning from './pages/AirConditioning';
import Repair from './pages/Repair';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';


function App() {

  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/stacja' component={CheckUp}></Route>
          <Route exact path='/klima' component={AirConditioning}></Route>
          <Route exact path='/mechanika' component={Repair}></Route>
          <Route exact path='/galeria' component={Gallery}></Route>
          <Route exact path='/kontakt' component={Contact}></Route>         
        </Switch>         
      </div>
    </Router>      
  );
}

export default App;
