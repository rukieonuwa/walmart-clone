import React from 'react';
import "./walmart.css";


import NotFound from "./pages/notfound";
 import Admin from "./pages/admin";
import Createproduct from "./pages/createproduct";
import Allproducts from "./pages/allproducts";
import Homepage from "./pages/homepage";
import Shoppage from "./pages/shoppage";
import Signin from "./pages/signin";
//import Create from "./pages/createaccount";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToggleWrapper } from "./context/toggle";
import Createaccount from './pages/createaccount';
import Productview from "./pages/productpage";


export default function App() {
  return (
   <ToggleWrapper>
		 <Router basename="/walmart-clone">
      <Switch>
        <Route path="/" exact >
          <Homepage />
        </Route>
        <Route path="/homepage">
          <Homepage/>
        </Route>
        <Route path="/shoppage">
           <Shoppage/>
        </Route>
        <Route path="/admin" component={Admin}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/createaccount" component={Createaccount}/>
        <Route path="/product/:id" component={Productview}/>
        <Route path="/createproduct" component={Createproduct}/>
        <Route path="/allproducts" component={Allproducts}/>  
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
   </ToggleWrapper>
  );
}
