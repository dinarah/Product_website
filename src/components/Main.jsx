import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <div>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Main;