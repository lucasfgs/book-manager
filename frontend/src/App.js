import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import GlobalStyle from "./styles/GobalStyle";
import Routes from "./components/Routes";

function App() {
  return (
    <Router>
      <Switch>
        <Routes />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
