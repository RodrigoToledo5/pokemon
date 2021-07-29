import './App.css';
import {Route} from 'react-router-dom'
import Home from './components/Home';
import Bag from './components/Bag';
import Nav from './components/NavBar/Nav';
import Contact from './components/Contact';
import Battle from './components/Battle';

function App() {
  return (
    
    <div className="body">
      <Route path="/" component={Nav}/>
      <Route exact path="/" component={Home}/>
      <Route path="/Bag" component={Bag}/>
      <Route path="/Battle" component={Battle}/>
      <Route path="/Contact" component={Contact}/>
    </div>
  );
}

export default App;
