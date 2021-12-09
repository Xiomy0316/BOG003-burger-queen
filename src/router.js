import React from "react";
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './home/home.jsx'
import Menu from './menu/menu.jsx'
import Order from './order/order.jsx'
import Chef from './chef/chef.jsx'
// import MenuBreakfast from "./menu/menuBreakfast.jsx";

//import { async } from "@firebase/util";

const App = () => {
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
         {/*  <Route path="/break-menu">
            <MenuBreakfast />
          </Route> */}
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
