import React from 'react';
import ReactDOM from 'react-dom';
import Request_Demo from './Request_Demo.jsx';



var Demo = React.createClass({
  render: function () {
    return (
      <div>
        <div className="container-fluid about">
          <div className="CustomHeader">
            <span>HOW IT WORKS
              </span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="container-fluid picture">
                  <video width="720" autoPlay controls>
                    <source src="videos/test.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h3>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh,
                  ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna</h3>
              </div>
            </div>
          </div>
        </div>
        <Request_Demo />
      </div>
    );
  }
});

module.exports = Demo;