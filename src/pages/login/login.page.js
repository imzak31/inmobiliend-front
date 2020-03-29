import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './login.styles.scss';

class Login extends React.Component {
  handleLogin = () => {
    // This is for checking with API endpoint
    
    axios.post('http://inmobilliend.com/api/ingreso', { email: email.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      this.props.history.push("/home");
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
    
    this.props.history.push("/home");
  }

  render() {
    return (
      <div className="login-page">
        <div className="container py-5">
          <div className="auth-inner">
            <h3>Log In</h3>

            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group d-flex justify-content-between align-items-center">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>

              {/* <p className="forgot-password text-right">
                Already registered <Link to="/" className="a-link"> Log In </Link>
              </p> */}
            </div>

            <button onClick={this.handleLogin} className="btn btn-primary btn-block">LOGIN</button>
            <p className="forgot-password text-center">
              Don’t have an account? <Link to="/register" className="a-link"> Sign Up </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;