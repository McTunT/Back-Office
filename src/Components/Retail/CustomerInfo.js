import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid, TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";
import Branch from "./Branch";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const styles = () => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

const NumberFormatIdcard = props => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      format="# #### ##### ## #"
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
    />
  );
};

NumberFormatIdcard.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class CustomerInfo extends Component {
  state = {
    name: " ",
    single: " ",
    numberformat: " ",
    phone: " "
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChangeSelect = name => value => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <form className={classes.container} noValidate autoComplete="off">
          <MuiThemeProvider theme={theme}>
            <Typography
              gutterBottom
              component="h2"
              align="center"
              variant="headline"
            >
              ข้อมูลลูกค้า
            </Typography>
          </MuiThemeProvider>
          <Grid container spacing={24}>
            <Grid item xs={12} md={6}>
              <TextField
                label="บัตรประชาชน"
                onChange={this.handleChange("numberformat")}
                id="Idcard"
                InputProps={{
                  inputComponent: NumberFormatIdcard
                }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Branch />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                id="name_thai"
                label="ชื่อไทย"
                onChange={this.handleChange("name")}
                margin="normal"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                id="name_eng"
                label="ชื่ออังกฤษ"
                margin="normal"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                id="birthday"
                label="วันเกิด"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                id="Cardissue"
                label="วันออกบัตร"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                id="Cardexpiration"
                label="วันออกบัตร"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                id="phone_number"
                label="เบอร์โทรศัพท์"
                value={this.state.age}
                onChange={this.handleChange("phone")}
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="email"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address"
                label="ที่อยู่"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}
CustomerInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerInfo);
