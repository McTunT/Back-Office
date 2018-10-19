import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import NoSsr from "@material-ui/core/NoSsr";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Table from "../Components/Customer/Table";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 360
  },
  lists: {
    backgroundColor: theme.palette.background.paper
  }
});

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

const ComponentLink = props => {
  const { classes } = props;

  return (
    <NoSsr>
      <Router>
        <div>
          <Route exact path="/" />
          <Route path="/drafts" component={Table} />
          <div className={classes.root}>
            <div className={classes.lists}>
              <List component="nav">
                <ListItemLink to="/" primary="Inbox" icon={<InboxIcon />} />
                <ListItemLink
                  to="/drafts"
                  primary="Drafts"
                  icon={<DraftsIcon />}
                />
              </List>
            </div>
          </div>
        </div>
      </Router>
    </NoSsr>
  );
};

ComponentLink.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComponentLink);
