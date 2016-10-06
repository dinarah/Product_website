import React from 'react';
import ReactDOM from 'react-dom';

var Featured = React.createClass({
  render: function () {
    return (
      <div>
          <div className = "container-fluid product">
            <div className = "CustomHeader">
              <span> USING BRAND
              </span>
              <div className="container picture">
                <div className="row">
                  <div className="col-md-4 col-xs-4">
                    <img className="img-responsive" src={"images/logo1.png"}/>
                  </div>
                  <div className="col-md-4 col-xs-4">
                    <img className="img-responsive" src={"images/logo2.png"}/>
                  </div>
                  <div className="col-md-4 col-xs-4">
                    <img className="img-responsive" src={"images/logo3.png"}/>
                  </div>
                </div>
              </div>

              <div className="container picture">
                <div className="row">
                  <div className="col-md-4 col-xs-4">
                    <img className="img-responsive" src={"images/logo4.png"}/>
                  </div>
                  <div className="col-md-4 col-xs-4">
                    <img className="img-responsive" src={"images/logo5.png"}/>
                  </div>
                  <div className="col-md-4 col-xs-4">
                    <img className="img-responsive" src={"images/logo6.png"}/>
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