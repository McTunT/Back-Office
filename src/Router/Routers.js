import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListItemLink from "./Drawers/ListItemLink";

const Routers = () => (
  <Router>
    <Route exact path="/" component={ListItemLink} />;
  </Router>
);
export default Routers;
