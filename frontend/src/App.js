import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Site from "./pages/Site";
import * as Routes from "./constants/routes";
import GlobalStyle from "./styles/GobalStyle";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Site />
          <Route path={Routes.DASHBOARD} component={Dashboard} />
        </div>
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
