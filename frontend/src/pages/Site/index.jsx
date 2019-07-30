import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import * as Routes from "../../constants/routes";

const Site = () => (
  <>
    <Route path={Routes.HOME} component={Home} exact />
    <Route path={Routes.LOGIN} component={Login} />
    <Route path={Routes.REGISTER} component={Register} />
  </>
);

export default Site;
