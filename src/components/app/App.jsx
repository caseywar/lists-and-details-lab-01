import React from 'react';
import AnimalCrossingContainer from '../../containers/AnimalCrossingContainer';
import DetailContainer from '../../containers/DetailContainer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" exact component={AnimalCrossingContainer} />
        <Route path="/villagers/:id" exact component={DetailContainer} />
      </Switch>
    </Router>
  )
}
