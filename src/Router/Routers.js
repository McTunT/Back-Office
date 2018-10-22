import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Router, Route, Link, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import createBrowserHistory from "history/createBrowserHistory";
import Table from "../Components/Customer/Table";
import TakeOrder from "../Components/Retail/TakeOrder";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  grow: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0
  }
});

const history = createBrowserHistory();

class Routers extends Component {
  state = { open: false };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        <Router history={history}>
          <div className={classes.root}>
            <List component="nav">
              <ListItem component={Link} to="/" button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Take Order" />
              </ListItem>
              <ListItem component={Link} to="/Customer" button>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Customer" />
              </ListItem>
            </List>

            <main className={classes.content}>
              <Route exact path="/" component={TakeOrder} />
              <Route path="/Customer" component={Table} />
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

Routers.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Routers);
