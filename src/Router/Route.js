import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainProduct from "../Pages/MainProduct/MainProduct";
import SignupStepper from "../Components/Stepper/SignupStepper.jsx";
import UserIndivisual from "../Pages/UserIndivisual/UserIndivisual";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Quote from "../Pages/Quote/Quote";
import Faq from "../Pages/FAQ/Faq";
import Login from "../Pages/Form/Login";
import UserList from "../Pages/UserList/UserList";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import ComparePage from "../Pages/MainProduct/ComparePage";
const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainProduct} />
        <Route exact path="/signup" component={SignupStepper} />
        <Route exact path="/user-indivisual" component={UserIndivisual} />
        <Route exact path="/user-profile" component={UserProfile} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/qu" component={Quote} />
        <Route exact path="/user-list" component={UserList} />
        <Route exact path="/compare" component={ComparePage} />
        <Route exact path="/admin" component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
