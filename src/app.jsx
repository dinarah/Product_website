import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import Product from './components/Product.jsx';
import Header from './components/Header.jsx';
import Demo from './components/Demo.jsx';
import Footer from './components/Footer.jsx';
import Featured from './components/Featured.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
      <Route path="Home" component={Home}></Route>
      <Route path="Product" component={Product}></Route>
      <Route path="About" component={About}></Route>
      <Route path="Demo" component={Demo}></Route>
      <Route path="Contact" component={Contact}></Route>
      <Route path="Featured" component={Featured}></Route>
    </Route>
  </Router>
  , document.getElementById('content'));

module.exports = Home;
