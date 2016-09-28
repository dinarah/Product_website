import React from 'react';
import ReactDOM from 'react-dom';

var Order = React.createClass({
  render: function () {
    return (
      <div>
          <div className = "container-fluid about">
            <div className = "container" id = "about">
              <span> ORDER
              </span>
            </div>
            <div className = "container">
              <div className="row">
                <div className="col-md-4 picture">
                  <h3>OUR STORY</h3>
                  <p className="parAbout">Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh,
                    ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna
                    mollis euismod.Donec sed odio.</p>
                </div>
                <div className="col-md-4 picture">
                  <h3>OUR VISION</h3>
                  <p className="parAbout">Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh,
                    ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna
                    mollis euismod.Donec sed odio.</p>
                </div>
                <div className="col-md-4 picture">
                  <h3>OUR TECHNOLOGY</h3>
                  <p className="parAbout">Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh,
                    ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna
                    mollis euismod.Donec sed odio.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = Order;