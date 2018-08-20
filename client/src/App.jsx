import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import portfolio from './pages/Artist_Portfolio';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={portfolio} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
