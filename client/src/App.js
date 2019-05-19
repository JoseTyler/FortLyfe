import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SquadForm from './components/SquadForm'
import SquadList from './components/SquadList';

// import './App.css';

function App() {
  return (
    <Router>
        <div>
          <p>navbar</p>
          <Switch>
            <Route exact path="/" component={SquadForm}/>
            <Route exact path="/squads" component={SquadList}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
