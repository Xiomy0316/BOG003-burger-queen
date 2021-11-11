import React from "react";
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './home/home.jsx'
import MenuLunch from './menu/menuLunch.jsx'
import Order from './order/order.jsx'
import Chef from './chef/chef.js'
import MenuBreakfast from "./menu/menuBreakfast.jsx";

//import { async } from "@firebase/util";

const App = () => {
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/menu">
            <MenuLunch />
          </Route>
          <Route path="/break-menu">
            <MenuBreakfast />
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
}

export default App;
