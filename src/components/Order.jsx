import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Buy from './Buy.jsx';

var Order = React.createClass({
  onTopScroll: function () {
    window.scrollTo(0, 0);
  },

  render: function () {
    return (
      <div>
        <div className = "container-fluid about">
          <div className="CustomHeader">
            <span> ORDER
            </span>
          </div>
          <div className = "container text-center">
            <div className="row">
              <div className="col-md-3 order">
                <h3>BASIC</h3>
                <div>Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh </div>
                <h3>19, 99 €</h3>
                <div>
                  <Link to="/buy"><button className="btn btn-default" onClick={this.onTopScroll}>ORDER</button></Link>
                </div>
              </div>
              <div className="col-md-3 order">
                <h3>OPTIMAL</h3>
                <div>Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh </div>
                <h3>29, 99 €</h3>
                <div>
                  <Link to="/buy"><button className="btn btn-default" onClick={this.onTopScroll}>ORDER</button></Link>
                </div>
              </div>
              <div className="col-md-3 order">
                <h3>PREMIUM</h3>
                <div>Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh </div>
                <h3>39, 99 €</h3>
                <div>
                  <Link to="/buy"><button className="btn btn-default" onClick={this.onTopScroll}>ORDER</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Order;