import {useState} from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Diagnosis from './pages/Diagnosis';
import AirCondition from './pages/AirCondition';
import Repair from './pages/Repair';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (
    <Router>
      <div className="App">
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/diagnosis' component={Diagnosis}></Route>
          <Route exact path='/airCondition' component={AirCondition}></Route>
          <Route exact path='/repair' component={Repair}></Route>
          {/* <Route exact path='/galeria' component={Gallery}></Route>
          <Route exact path='/kontakt' component={Contact}></Route>          */}
        </Switch>         
      </div>
    </Router>      
  );
}

export default App;
