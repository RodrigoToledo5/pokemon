import './App.css';
import {Route,Switch} from 'react-router-dom'
import Bag from './components/bag/Bag';
import Nav from './components/NavBar/Nav';
import Contact from './components/contact/Contact';
import Battle from './components/battle/Battle';
import Landing from './components/landing/Landing';
import Adventure from './components/adventure/adventure';
import { Fragment } from 'react';

function App() {
  return (
    <>
    <Switch>
     <Route exact path="/" component={Landing}/>
      <div className="body">
        <Route exact path="/Bag" component={Nav}/>
        <Route exact path="/Bag" component={Bag}/>
        <Route exact path="/Adventure" component={Nav}/>
        <Route exact path="/Adventure" component={Adventure}/>
        <Route exact path="/Battle" component={Nav}/>
        <Route exact path="/Battle" component={Battle}/>
        <Route exact path="/Contact" component={Nav}/>
        <Route exact path="/Contact" component={Contact}/>
      </div>
    </Switch>
    </>
  );
}

export default App;
