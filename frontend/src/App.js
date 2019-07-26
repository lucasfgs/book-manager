import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Routes from "./constants/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path={Routes.HOME} component={Home} exact />
          <Route path={Routes.LOGIN} component={Login} />
          <Route path={Routes.REGISTER} component={Register} />
          <Route path={Routes.ADMIN} component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
