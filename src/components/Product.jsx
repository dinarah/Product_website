import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var Product = React.createClass({
  render: function () {
    return (
      <div>
        <div className = "container-product">
          <div className = "container" id = "product">
            OUR TECHNOLOGY
          </div>
          <div className = "container">
            <div className="row">
              <div className="col-md-4">
                <h3>FAST</h3>
                <p className="parAbout">Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh,
                  ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna
                  mollis euismod.Donec sed odio.</p>
              </div>
              <div className="col-md-4">
                <h3>SECURE</h3>
                <p className="parAbout">Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh,
                  ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna
                  mollis euismod.Donec sed odio.</p>
              </div>
              <div className="col-md-4">
                <h3>EASY</h3>
                <p className="parAbout">Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh,
                  ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna
                  mollis euismod.Donec sed odio.</p>
              </div>
            </div>
            <div className="container picture">
              <img className="img-responsive" src={"images/product.png"}/>
            </div>
            <div className="container">  <Link to="/Demo"><button className="btn btn-default">TRY DEMO</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Product;