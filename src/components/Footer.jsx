import React from 'react';
import ReactDOM from 'react-dom';

var Footer = React.createClass({
  render: function () {
    return (
      <div className = "container">
        <footer id="footer">
          <ul className="copyright" id="listFooter">
            <li>BRAND</li><li>2016</li>
          </ul>
        </footer>
      </div>
    );
  }
});
module.exports = Footer;