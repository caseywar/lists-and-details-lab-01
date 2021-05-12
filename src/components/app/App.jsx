import React from 'react';
import AnimalCrossingContainer from '../../containers/AnimalCrossingContainer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AnimalCrossingContainer} />
      </Switch>
    </Router>
  )
}
