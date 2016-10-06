import React from 'react';
import ReactDOM from 'react-dom';
import Request_Demo from './Request_Demo.jsx';

var Contact = React.createClass({
  render: function () {
    return (
      <div>
        <div className = "container-fluid about">
          <div className = "CustomHeader">
            <span> GET IN TOUCH
            </span>
          </div>
          <ul className="copyright">
            <li>Tel.0198-745-632</li>
            <li>info-demo @brand.com</li>
            <li>Fax.0198-632-874</li>
          </ul>
          <ul className="copyright">
            <li><a href="https://twitter.com" className="fa fa-twitter fa-2x" ><span className="label"></span></a></li>
            <li><a href="https://www.linkedin.com" className="fa fa-linkedin fa-2x"><span className="label"></span></a></li>
            <li><a href="https://www.youtube.com" className="fa fa-youtube fa-2x"><span className="label"></span></a></li>
            <li><a className="fa fa-envelope-o fa-2x" aria-hidden="true"></a></li>
          </ul>
        </div>
        <Request_Demo/>
      </div>
    );
  }
});

module.exports = Contact;