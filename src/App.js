import './App.css';
import {Route,Switch} from 'react-router-dom'
import Bag from './components/bag/Bag';
import Nav from './components/NavBar/Nav';
import Contact from './components/contact/Contact';
import Battle from './components/battle/Battle';
import Landing from './components/landing/Landing';
import Adventure from './components/adventure/adventure';

function App() {
  return (
    <>
    <Switch>
      <>
     <Route exact path="/" component={Landing}/>
      <div className="body">
        <Route path="/Bag" component={Nav}/>
        <Route path="/Bag" component={Bag}/>
        <Route path="/Adventure" component={Nav}/>
        <Route path="/Adventure" component={Adventure}/>
        <Route path="/Battle" component={Nav}/>
        <Route path="/Battle" component={Battle}/>
        <Route path="/Contact" component={Nav}/>
        <Route path="/Contact" component={Contact}/>
      </div>
      </>
    </Switch>
    </>
  );
}

export default App;
