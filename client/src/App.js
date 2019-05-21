import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SquadForm from './components/SquadForm'
import SquadList from './components/SquadList'
import GameplayForm from './components/GameplayForm'
import GameplayList from './components/GameplayList'
import styled from 'styled-components'

// import './App.css';

function App() {

  return (
    <Router>
        <div> 
          <header> 
          <Link to ={'/'}>Home</Link>
          <Link to ={'/squads'}>Squads</Link>
          <Link to ={'/gameplay'}>Showoff</Link>
          <Link to ={'/gameplays'}>Showdown</Link>
          </header>
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
