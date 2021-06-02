import React from 'react';
import "./walmart.css";


import NotFound from "./pages/notfound";
// import Admin from "./pages/admin";
import Createproduct from "./pages/createproduct";
import Homepage from "./pages/homepage";
import Shoppage from "./pages/shoppage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToggleWrapper } from "./context/toggle";

export default function App() {
  return (
   <ToggleWrapper>
		 <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/homepage">
          <Homepage/>
        </Route>
        <Route path="/shoppage">
           <Shoppage/>
        </Route>
        <Route path="/createproduct">
          <Createproduct />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
   </ToggleWrapper>
  );
}
