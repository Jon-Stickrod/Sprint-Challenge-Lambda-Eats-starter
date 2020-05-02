import React from "react";

import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import './App.css';
import Pizza from './Pizza';
import Home from './Home';


const App = () => {
  return (
    <div className="App">
    <nav>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/Pizza"}>
        <button>Build Pizza</button>
      </Link>
    </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Pizza">
          <Pizza />
        </Route>
      </Switch>
  </div>
  );
};
export default App;
