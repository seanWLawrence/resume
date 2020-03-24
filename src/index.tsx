import React from "react";
import { render } from "react-dom";
import Resume from "src/components/Resume";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import "normalize.css";
import "./index.sass";

render(
  <Router>
    <Switch>
      <Route path="/(:printerFriendly)?">
        <Resume />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
