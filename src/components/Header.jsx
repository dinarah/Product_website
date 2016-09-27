import React from 'react';
import { Link } from 'react-router';

var Header = React.createClass({
    render: function () {
        return (
            <div>
                <div className="container">
                    <div className="navbar navbar-default" role="navigation">
                        <div className="navbar-inner">
                            <div className="container">
                                <div className="navbar-header">
                                    <Link to="/Home"><div className="navbar-brand brandName">BRAND</div></Link>
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span><i className="fa fa-sort-desc fa-2x" aria-hidden="true"></i></span>
                                    </button>
                                </div>
                                <div className="navbar-collapse collapse">
                                    <ul className="nav pull-center navbar-nav menu" role="tablist">
                                        <li className="li">
                                            <Link to="/product" activeStyle={{ color: '#e7ff6e' }}>Product</Link>
                                        </li>

                                        <li className="li">
                                            <Link to="/about" activeStyle={{ color: '#e7ff6e' }}>About</Link>
                                        </li>

                                        <li className="li">
                                            <Link to="/demo"  activeStyle={{ color: '#e7ff6e' }}>Demo</Link>
                                        </li>

                                        <li className="li">
                                            <Link to="/order"  activeStyle={{ color: '#e7ff6e' }}>Order</Link>
                                        </li>
                                        <li className="li">
                                            <Link to="/contact"  activeStyle={{ color: '#e7ff6e' }}>Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;