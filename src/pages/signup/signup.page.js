import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './signup.styles.scss';

class SignUp extends React.Component {
  handleSignup = () => {
    // This is for checking with API endpoint
    /*
    axios.post('http://localhost:4000/users/signup', { username: username.value, password: password.value }).then(response => {
      setUserSession(response.data.token, response.data.user);
      this.props.history.push("/home");
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
    */
    this.props.history.push("/home");
  }

  render() {
    return (
      <div className="signup-page">
        <div className="container py-5">
          <div className="auth-inner">
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>ID Document</label>
              <input type="text" className="form-control" placeholder="ID Document" />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>First name</label>
                  <input type="text" className="form-control" placeholder="First name" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Last name</label>
                  <input type="text" className="form-control" placeholder="Last name" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="form-group">
                  <label>Phone number</label>
                  <input type="tel" className="form-control" placeholder="Enter phone number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button onClick={this.handleSignup} className="btn btn-primary btn-block">REGISTER</button>
            <p className="forgot-password text-center">
              Already registered? <Link to="/" className="a-link"> Log In </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;