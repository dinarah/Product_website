import React from 'react';
import ReactDOM from 'react-dom';


var Request_Demo = React.createClass({
 onButtonClick: function() {
    alert('The message has been sent');
        },

    getInitialState: function() {
        return {
    
        }
    },

  render: function() {
    return (
      <div>
        <div className = "container-product">
          <div className = "container" id = "featued">
            <span>REQUEST DEMO</span>
            <h3>Please fill in your contact details below </h3>
            <form>
              <div className="container-fluid input-container">
                <div className="row">
                  <div className="col-sm-6 col-sm-offset-3">
                    <div className="form-group has-success has-feedback">
                      <input type="name" className="form-control input"  placeholder="Name" aria-describedby="inputSuccess2Status"/>
                      <span id="inputError2Status" className="sr-only"></span>
                    </div>
                    <div className="form-group">
                      <input type="Email" className="form-control input"  placeholder="Email"/>
                    </div>
                    <div className="form-group">
                      <input type="subject" className="form-control input"  placeholder="Subject"/>
                    </div>
                    <div className="form-group">
                      <input type="phone" className="form-control input"  placeholder="Phone"/>
                    </div>
                    <div className="form-group">
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <button className="btn-default" id="btn-send" onClick={this.onButtonClick}>SEND</button>
          </div>
        </div>
      </div>

    );
  }
});
module.exports = Request_Demo;