import React from 'react';
import './pricing-table.styles.scss';

class PricingTable extends React.Component {
  render() {

    return (
      <div>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
              {/* Free Tier */}
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                    <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                      <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
                      <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                      <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>
                      <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
                    </ul>
                    <button className="btn btn-block btn-primary text-uppercase">Button</button>
                  </div>
                </div>
              </div>
                
              {/* Plus Tier */}
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                    <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 Users</strong></li>
                      <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
                      <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                      <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
                      <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
                    </ul>
                    <button className="btn btn-block btn-primary text-uppercase">Button</button>
                  </div>
                </div>
              </div>
                  
              {/* Pro Tier */}
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                    <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong></li>
                      <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
                      <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                      <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free Subdomains</li>
                      <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
                    </ul>
                    <button className="btn btn-block btn-primary text-uppercase">Button</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PricingTable;
