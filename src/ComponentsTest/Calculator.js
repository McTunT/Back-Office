import React from "react";

class Tototal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      price: 0,
      num2: 0,
      total: 0
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleNum2Change = this.handleNum2Change.bind(this);
  }

  handleNumberChange(event) {
    this.setState({ number: event.target.value });
  }

  handlePriceChange(event) {
    this.setState({ price: event.target.value });
  }

  handleNum2Change(event) {
    this.setState({ num2: event.target.value });
  }

  render() {
    const total = this.state.number * this.state.price;
    return (
      <div>
        <input
          type="number"
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
        <input
          type="number"
          value={this.state.price}
          onChangeCapture={this.handlePriceChange}
        />
        <input
          type="number"
          value={this.state.num2}
          onChangeCapture={this.handleNum2Change}
        />
        <input type="text" value={total} />
      </div>
    );
  }
}

export default Tototal;
