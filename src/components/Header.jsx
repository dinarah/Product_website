import React from 'react';
import { Link } from 'react-router';

var Header = React.createClass({
    render: function () {
        return (
            <div className="sitecontainer">
                <div className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <div className="brand">
                                <Link to="/Home"><div className="navbar-brand brandName">BRAND</div></Link>
                            </div>
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="li">
                                    <Link to="/product" activeStyle={{ color: '#e7ff6e' }}>Product</Link>
                                </li>

                                <li className="li">
                                    <Link to="/about" activeStyle={{ color: '#e7ff6e' }}>About</Link>
                                </li>

                                <li className="li">
                                    <Link to="/featured"  activeStyle={{ color: '#e7ff6e' }}>Featured</Link>
                                </li>

                                <li className="li">
                                    <Link to="/contact"  activeStyle={{ color: '#e7ff6e' }}>Contact</Link>
                                </li>

                                <li className="li">
                                    <Link to="/demo"  activeStyle={{ color: '#e7ff6e' }}>Demo</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;