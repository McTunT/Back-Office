import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Paper,
  Stepper,
  Step,
  StepLabel
} from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CustomerInfo from "./CustomerInfo";
import Finance from "./Finance";
import Product from "./Product";
import Review from "./Review";

const styles = theme => ({
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

const steps = ["Customer Infomation", "Product", "Finance", "Review"];

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

class TakeOrder extends Component {
  state = {
    activeStep: 0
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
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <div className={classes.layout}>
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
                    ดำเนินการออกใบเสร็จเรียบร้อยแล้ว
                  </Typography>
                  <Typography variant="subheading">
                    ...............................................
                    ...............................................
                    ...............................................
                  </Typography>
                </MuiThemeProvider>
                <div className={classes.buttons}>
                  <Button onClick={this.handleReset} className={classes.button}>
                    สร้างใบสั่งซื้อ
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
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </div>
    );
  }
}

TakeOrder.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TakeOrder);
