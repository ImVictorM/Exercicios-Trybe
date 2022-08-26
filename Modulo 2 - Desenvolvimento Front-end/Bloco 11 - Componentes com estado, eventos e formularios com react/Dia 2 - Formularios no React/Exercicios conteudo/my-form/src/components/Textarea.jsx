import React, { Component } from "react";

class Textarea extends Component {
  render() {
    const {name, action} = this.props;
    if (typeof action !== 'function') {
      return (
        <span>Uma função deve ser passado como parâmetro</span>
      )
    }
    return (
      <textarea
        name={name}
        onChange={ action }
      />
    );
  }
}

export default Textarea;