import React from 'react';

import PricingTable from '../../components/pricing-table/pricing-table.component';

import './home.styles.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentPlans: []
    };
  }
  
  componentDidMount() {
    /*
    axios.get('http://localhost:4000/api/planes-pagos', { id: username.value, password: password.value }).then(response => {
      setUserSession(response.data.token, response.data.user);
      this.props.history.push("/home");
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
    */
  }

  handleLogout = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="homepage">
        <div className="container py-3">
          <div className="row justify-content-center header">
            <div className="col-12 text-center">
              <h3 className="mb-0">Welcome to the Home Page!</h3>
              <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
            </div>
          </div>

          <div className="plan-body">
            <PricingTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;