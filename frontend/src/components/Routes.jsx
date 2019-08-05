import React from "react";

import { Route } from "react-router-dom";

import * as Routes from "../constants/routes";

//SITE
import Home from "../pages/Site/Home";
import Login from "../pages/Site/Login";
import Register from "../pages/Site/Register";

//DASHBOARD
import Dashboard from "../pages/Dashboard";
import MyBooks from "../pages/Dashboard/MyBooks";
import SearchBooks from "../pages/Dashboard/SearchBooks";

const RoutesComponent = () => (
  <>
    <Route path={Routes.HOME} component={Home} exact />
    <Route path={Routes.LOGIN} component={Login} />
    <Route path={Routes.REGISTER} component={Register} />
    <Route path={Routes.DASHBOARD} component={Dashboard} exact />
    <Route path={Routes.MY_BOOKS} component={MyBooks} />
    <Route path={Routes.SEARCH_BOOKS} component={SearchBooks} />
  </>
);

export default RoutesComponent;
