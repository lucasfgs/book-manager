import React from "react";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Site from "./pages/Site";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Routes from "./constants/routes";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Site />
          <Route path={Routes.DASHBOARD} component={Dashboard} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
