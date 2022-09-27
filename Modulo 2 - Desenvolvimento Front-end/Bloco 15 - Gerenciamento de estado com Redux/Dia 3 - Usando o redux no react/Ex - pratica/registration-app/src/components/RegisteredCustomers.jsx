import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RegisteredCustomers extends Component {
  render() {
    const { users, login } = this.props;
    return (
      <div>
        <h1>Registered Customers</h1>
        {
          !login ? <p>Login não efetuado</p> : (
            <div>
              <Link to="/sign-up">Sign up</Link>
              {
                users.length === 0 ? <p>Nenhum cliente cadastrado</p> : (
                  users.map((user, index) => {
                    const { name, age, email } = user;
                    return (
                      <div key={ index }>
                        <p>{name}</p>
                        <p>{age}</p>
                        <p>{email}</p>
                      </div>
                    )
                  })
                )
              }
            
            </div>
          )
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