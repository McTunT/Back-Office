import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemIcon, ListItemText, List } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Table from "../Customer/Table";
import { withStyles } from "@material-ui/core/styles";

class ListItemLink extends React.Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { icon, primary } = this.props;
    return (
      <li>
        <ListItem button component={this.renderLink}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }
}
ListItemLink.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

const PropsLink = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" />
        <Route path="/Customer" component={Table} />
        <div>
          <List component="nav">
            <ListItemLink
              to="/Takeorder"
              primary="Takerder"
              icon={<DashboardIcon />}
            />
            <ListItemLink
              to="/Customer"
              primary="Customer"
              icon={<AccountBoxIcon />}
            />
          </List>
        </div>
      </div>
    </Router>
  );
};

export default withStyles()(PropsLink);
