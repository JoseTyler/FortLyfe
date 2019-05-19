import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SquadForm from './components/SquadForm'

// import './App.css';

function App() {
  return (
    <Router>
        <div>
          <p>navbar</p>
          <Switch>
            <Route exact path="/" component={SquadForm}/>
            {/* <Route path="/:id" component={SingleCreature}/> */}
          </Switch>
        </div>
      </Router>
  );
}

export default App;
