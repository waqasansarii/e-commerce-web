import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainProduct from "../Pages/MainProduct/MainProduct";

const AppRoute = () => {
  return (
      <Router >
          <Switch>
              <Route exact path='/' component={MainProduct} />
          </Switch>
      </Router>
  );
};

export default AppRoute;
