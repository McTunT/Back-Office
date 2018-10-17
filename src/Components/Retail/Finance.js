import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { payBy, listBank } from "../docs/data";

const styles = () => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class Finance extends React.Component {
  state = {
    receipt: " ",
    payBy: " ",
    listBank: " "
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={24}>
          <Grid item sm={12} md={6}>
            <TextField
              id="receipt"
              label="ใบเสร็จ"
              value={this.state.receipt}
              onChange={this.handleChange("receipt")}
              margin="normal"
              type="number"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              id="datereceipt"
              label="วันที่ออกใบเสร็จ"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              fullWidth
              margin="normal"
            />{" "}
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              select
              label="ชำระโดย"
              value={this.state.payBy}
              fullWidth
              margin="normal"
              onChange={this.handleChange("payBy")}
            >
              {payBy.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              select
              label="ธนาคาร"
              value={this.state.listBank}
              fullWidth
              margin="normal"
              onChange={this.handleChange("listBank")}
            >
              {listBank.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </form>
    );
  }
}

Finance.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Finance);
