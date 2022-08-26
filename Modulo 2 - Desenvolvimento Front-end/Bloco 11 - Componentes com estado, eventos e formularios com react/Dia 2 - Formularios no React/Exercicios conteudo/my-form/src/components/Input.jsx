import React, { Component } from "react";

class Input extends Component {
  render() {
    const { type, action, name, value, id, } = this.props;
    let error = '';
    if (type === 'text' && value.length > 20) {
      error = 'nome grande demais';
    }
    return (
      <label htmlFor={id}>
        {name}:
        <input
          id={id}
          type={type}
          onChange={action}
          name={name}
        />
      </label>

    );
  }
}

export default Input;