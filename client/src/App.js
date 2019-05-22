import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SquadForm from './components/SquadForm'
import SquadList from './components/SquadList'
import GameplayForm from './components/GameplayForm'
import GameplayList from './components/GameplayList'


function App() {
  
  return (
    <Router>
        <div> 
          <Switch>
            <Route exact path="/" component={SquadForm}/>
            <Route exact path="/squads" component={SquadList}/>
            <Route exact path="/gameplay" component={GameplayForm}/>
            <Route exact path="/gameplays" component={GameplayList}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

// =============================

