import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  MenuItem
} from "@material-ui/core";

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
    package: " ",
    price: 0,
    premier: " ",
    totalprice: " ",
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
                margin="dense"
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
                margin="dense"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                type="number"
                id="number"
                label="แพ็กเกจ"
                value={this.state.package}
                onChange={this.handleChange("package")}
                margin="dense"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="adornment-amount">ราคาต่อหน่วย</InputLabel>
                <Input
                  id="price"
                  type="number"
                  margin="dense"
                  value={this.state.price}
                  onChange={this.handleChange("price")}
                  startAdornment={
                    <InputAdornment position="start">฿</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                type="number"
                id="price"
                label="พรีเมียร์"
                value={this.state.premier}
                onChange={this.handleChange("premier")}
                margin="dense"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="adornment-amount">ราคารวม</InputLabel>
                <Input
                  id="totalprice"
                  type="number"
                  margin="dense"
                  label="ราคารวม"
                  value={this.state.totalprice}
                  onChange={this.handleChange("totalprice")}
                  startAdornment={
                    <InputAdornment position="start">฿</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                select
                label="สถานที่รับ"
                value={this.state.getgold}
                onChange={this.handleChange("getgold")}
                fullWidth
                margin="dense"
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
                margin="dense"
                InputLabelProps={{
                  shrink: true
                }}
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
                margin="dense"
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
