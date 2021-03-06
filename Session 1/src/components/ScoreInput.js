import React, { Component } from "react";

class ScoreInput extends Component {
  state = {
    value: this.props.value
  };

  _handleChange = event => {
    this.setState({ value: event.target.value }, () => {
      this.props.handleChange(
        this.props.round,
        this.props.index,
        parseInt(this.state.value, 10) || 0
      );
    });
  };

  componentWillReceiveProps = nextProps => {
    if ((parseInt(this.state.value, 10) || 0) !== nextProps.value) {
      this.setState({
        value: nextProps.value
      });
    }
  };

  render() {
    return (
      <input
        type="number"
        value={this.state.value}
        onChange={this._handleChange}
      />
    );
  }
}

export default ScoreInput;
