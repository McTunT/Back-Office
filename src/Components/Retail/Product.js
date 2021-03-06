import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, TextField, InputAdornment, MenuItem } from "@material-ui/core";
import Branch from "./Branch";

const buySell = [
  {
    value: "Buy",
    label: "Buy"
  },
  {
    value: "Sell",
    label: "Sell"
  }
];

const getGold = [
  {
    value: "สาขาสีลม ชั้น G อาคารยูไนเต็ดเซ็นเตอร์",
    label: "สาขาสีลม ชั้น G อาคารยูไนเต็ดเซ็นเตอร์"
  },
  {
    value: "สาขาวังบูรพา ตรงข้ามเมอรี่คิงส์วังบูรพา",
    label: "สาขาวังบูรพา ตรงข้ามเมอรี่คิงส์วังบูรพา"
  }
];

const styles = () => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class Product extends React.Component {
  state = {
    buysell: " ",
    number: 1,
    package: 0,
    price: 0,
    premier: 0,
    totalprice: 0,
    getgold: " ",
    sellthrough: " "
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const total = this.state.price * this.state.number + this.state.premier / 1;

    return (
      <React.Fragment>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Branch />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                select
                label="ประเภท"
                value={this.state.buysell}
                onChange={this.handleChange("buysell")}
                fullWidth
                margin="normal"
                variant="outlined"
              >
                {buySell.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                type="number"
                id="price"
                label="จำนวน"
                value={this.state.number}
                onChange={this.handleChange("number")}
                margin="normal"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                type="number"
                id="number"
                label="แพ็กเกจ"
                value={this.state.package}
                onChange={this.handleChange("package")}
                margin="normal"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="price"
                label="ราคาต่อหน่วย"
                margin="normal"
                type="number"
                value={this.state.price}
                onChange={this.handleChange("price")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  )
                }}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                type="number"
                id="price"
                label="พรีเมียร์"
                value={this.state.premier}
                onChange={this.handleChange("premier")}
                margin="normal"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="totalprice"
                label="ราคารวม"
                margin="normal"
                value={total}
                onChange={this.handleChange("totalprice")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  )
                }}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                select
                label="สถานที่รับ"
                value={this.state.getgold}
                onChange={this.handleChange("getgold")}
                fullWidth
                margin="normal"
                variant="outlined"
              >
                {getGold.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                id="sellthrough"
                label="ขายผ่าน"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                id="datetime"
                label="กำหนดวันรับสินค้า"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);
