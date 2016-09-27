import React from 'react';
import ReactDOM from 'react-dom';
import Request_Demo from './Request_Demo.jsx';


var Demo = React.createClass({
  render: function () {
    return (
      <div>
          <div className = "container-fluid about">
            <div className = "container" id = "about">
              <span>HOW IT WORKS
              </span>
            </div>
            <div className = "container">
              <div className="row">
                <div className="col-md-12">
                 <div className="container-fluid picture">
              <img className="img-responsive" src={"images/video_screenshot.jpg"}/>
            </div>
                  <h3>Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh,
                  ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna</h3>
                </div>  
              </div>
            </div>
          </div>
           <Request_Demo/>
      </div>
    );
  }
});

module.exports = Demo;