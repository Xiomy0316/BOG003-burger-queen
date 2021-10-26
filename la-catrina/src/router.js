import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './home/home.jsx'
import Menu from './menu/menu.js'
import Order from './order/order.js'
import Chef from './chef/chef.js'

const App = () => (
    <Router>
      <div>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/chef">
            <Chef />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  export default App;
