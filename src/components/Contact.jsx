import React from 'react';
import ReactDOM from 'react-dom';
import Request_Demo from './Request_Demo.jsx';

var Contact = React.createClass({
  render: function () {
    return (
      <div>
          <div className = "container-about">
            <div className = "container" id = "about">
              <span> GET IN TOUCH
              </span>
            </div>

            <ul className="copyright">
              <li>Tel.0198-745-632</li>
              <li>info-demo@brand.com</li>
              <li>Fax.0198-632-874</li>
            </ul>
          </div>
        <Request_Demo/> 
      </div>
    );
  }
});

module.exports = Contact;