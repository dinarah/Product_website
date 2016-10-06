import React from 'react';
import ReactDOM from 'react-dom';

var About = React.createClass({
  render: function () {
    return (
      <div>
        <section id="About">
          <div className = "container-fluid about">
            <div className = "CustomHeader">
              <span> MEET BRAND
              </span>
            </div>
            <div className = "container">
              <div className="row">
                <div className="col-md-4 picture">
                  <i className="material-icons">bubble_chart</i>
                  <h3>OUR STORY</h3>
                  <p className="parAbout">Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh,
                    ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna
                    mollis euismod.Donec sed odio.</p>
                </div>
                <div className="col-md-4 picture">
                  <i className="material-icons">extension</i>
                  <h3>OUR VISION</h3>
                  <p className="parAbout">Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh,
                    ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna
                    mollis euismod.Donec sed odio.</p>
                </div>
                <div className="col-md-4 picture">
                  <i className="material-icons">share</i>
                  <h3>OUR TECHNOLOGY</h3>
                  <p className="parAbout">Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh,
                    ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna
                    mollis euismod.Donec sed odio.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = About;