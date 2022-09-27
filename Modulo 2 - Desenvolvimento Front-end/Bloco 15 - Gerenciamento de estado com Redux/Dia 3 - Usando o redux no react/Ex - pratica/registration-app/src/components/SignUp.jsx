import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignUp extends Component {
  render() {
    const { login } = this.props;
    return (
      <div>
        <h1>Sign up</h1>
        {
          !login && <p>Login não efetuado</p>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.loginReducer.login,
  }
}

export default connect(mapStateToProps)(SignUp);