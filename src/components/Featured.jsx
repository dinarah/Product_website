import React from 'react';
import ReactDOM from 'react-dom';

var Featured = React.createClass({
  render: function () {
    return (
      <div>
          <div className = "container-product">
            <div className = "container" id = "featued">
              <span> USING BRAND
              </span>
              <div className="container picture">
                <div className="row">
                  <div className="col-md-4">
                    <img src={"images/logo1.png"}/>
                  </div>
                  <div className="col-md-4">
                    <img src={"images/logo2.png"}/>
                  </div>
                  <div className="col-md-4">
                    <img src={"images/logo3.png"}/>
                  </div>
                </div>
              </div>

              <div className="container picture">
                <div className="row">
                  <div className="col-md-4">
                    <img src={"images/logo4.png"}/>
                  </div>
                  <div className="col-md-4">
                    <img src={"images/logo5.png"}/>
                  </div>
                  <div className="col-md-4">
                    <img src={"images/logo6.png"}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

    );
  }
});

module.exports = Featured;