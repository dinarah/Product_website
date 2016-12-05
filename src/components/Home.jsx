import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute } from 'react-router';
import Product from './Product.jsx';
import About from './About.jsx';
import Featured from './Featured.jsx';
import Contact from './Contact.jsx';


var Home = React.createClass({

  render: function () {
    return (
      <div>
        <div>
          <div className = "container"  id = "big">
            <span> EMPOWERING GROWTH WITH REAL DATA</span>
          </div>
        </div>
        <Product/>
        <About/>
        <Featured/>
        <Contact/>
      </div>
    );
  }

});

module.exports = Home;