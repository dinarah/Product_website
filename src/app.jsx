import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import Product from './components/Product.jsx';
import Header from './components/Header.jsx';
import Request_Demo from './components/Request_Demo.jsx';
import Footer from './components/Footer.jsx';
import Order from './components/Order.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
      <Route path="home" component={Home}></Route>
      <Route path="product" component={Product}></Route>
      <Route path="about" component={About}></Route>
      <Route path="request_demo" component={Request_Demo}></Route>
      <Route path="contact" component={Contact}></Route>
      <Route path="order" component={Order}></Route>
    </Route>
  </Router>
  , document.getElementById('content'));

module.exports = Home;
