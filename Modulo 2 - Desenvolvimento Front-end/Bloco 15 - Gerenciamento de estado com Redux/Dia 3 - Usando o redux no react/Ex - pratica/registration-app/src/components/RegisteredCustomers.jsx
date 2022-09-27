import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisteredCustomers extends Component {
  render() {
    console.log(this.props)
    const { users, login } = this.props;
    return (
      <div>
        <h1>Registered Customers</h1>
        {
          !login && <p>Login não efetuado</p>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.loginReducer.users,
    login: state.loginReducer.login,
  }
}

export default connect(mapStateToProps)(RegisteredCustomers);