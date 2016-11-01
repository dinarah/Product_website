import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var Buy = React.createClass({
    render: function () {
        return (
            <div>
                <div className = "container-fluid product">
                    <h3 className="Customh3">You are 3 steps away from having BRAND at your own</h3>
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingOne">
                                <h4 className="panel-title">
                                    <a role="button"  className="CollapseButton" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        1. Your Personal Details
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                <div className="panel-body">
                                    <form>
                                        <div className="container-fluid input-container">
                                            <div className="row">
                                                <div className="col-sm-6 col-sm-offset-3">
                                                    <div className="form-group has-success has-feedback">
                                                        <input type="name" className="form-control InputBuy"  placeholder="Company / Name" aria-describedby="inputSuccess2Status"/>
                                                        <span id="inputError2Status" className="sr-only"></span>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="country" className="form-control InputBuy"  placeholder="Country"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control InputBuy"  placeholder="Email"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="phone" className="form-control InputBuy"  placeholder="Landline Phone"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="phone" className="form-control InputBuy"  placeholder="Mobile Phone"/>
                                                    </div>
                                                     <button className="btn" onClick={this.onButtonClick}>SUBMIT</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingTwo">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        2. Payment Means
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div className="panel-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Ad vegan excepteur butcher vice lomo.Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. 
                                     <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppmcvdam.png" alt="Buy now with PayPal" />
                                    <script async="async" src="vendor/js/paypal-button.min.js?merchant=hubievabouassaba-facilitator@gmail.com"
                                        data-button="buynow"
                                        data-name="BRAND"
                                        data-amount="100"
                                        data-currency="EUR"
                                        data-hosted_button_id="BuyButton"
                                        data-callback="https://dinarah.github.io/Product_website/public/#/buy"
                                        data-env="sandbox"
                                    ></script>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingThree">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        3. Your BRAND
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div className="panel-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Ad vegan excepteur butcher vice lomo.Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Buy;