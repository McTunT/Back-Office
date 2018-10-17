import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stepper,
  Step,
  StepLabel
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import styled from "styled-components";
import CustomerInfo from "./Retail/CustomerInfo";
import Product from "./Retail/Product";
import Finance from "./Retail/Finance";
import Review from "./Retail/Review";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NextBody = styled.body`
  margin: auto;
`;

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexWrap: "wrap"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#002458",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
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
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 950,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const steps = ["Customer Information", "Product", "Finance", "Review"];

const stepCustomer = step => {
  switch (step) {
    case 0:
      return <CustomerInfo />;
    case 1:
      return <Product />;
    case 2:
      return <Finance />;
    case 3:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
};

const themes = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class TakeOrder extends React.Component {
  state = {
    open: false,
    activeStep: 0
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
          >
            <NextBody />
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.hide
                )}
              >
                <MenuIcon />
              </IconButton>
              <MuiThemeProvider theme={themes}>
                <Typography
                  variant="title"
                  color="inherit"
                  noWrap
                  className={classes.grow}
                >
                  Next Back
                </Typography>
              </MuiThemeProvider>

              <Button color="inherit" variant="outlined">
                Log Out
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <div>
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Customer" />
                </ListItem>
              </div>
            </List>
          </Drawer>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <MuiThemeProvider theme={themes}>
                <Typography variant="display1" align="center">
                  Take Order
                </Typography>
              </MuiThemeProvider>
              <Stepper
                activeStep={activeStep}
                className={classes.stepper}
                alternativeLabel
              >
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <MuiThemeProvider theme={themes}>
                      <Typography variant="headline" gutterBottom>
                        ดำเนินการออกใบเสร็จเรียบร้อยแล้วครับ
                      </Typography>
                      <Typography variant="subheading">
                        ...............................................
                        ...............................................
                        ...............................................
                      </Typography>
                    </MuiThemeProvider>
                    <div className={classes.buttons}>
                      <Button
                        onClick={this.handleReset}
                        className={classes.button}
                      >
                        เริ่มต้นใหม่
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        พิมพ์ใบสั่งซื้อ
                      </Button>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {stepCustomer(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          ย้อนกลับ
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? "บันทึกใบสั่งซื้อ"
                          : "ถัดไป"}
                      </Button>
                    </div>
                    <Router>
                      <div>
                        <Route exact path="/" />
                        <Route path="/about" />
                      </div>
                    </Router>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

TakeOrder.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TakeOrder);
