var React = require('react');

var HeaderComponent = React.createClass({
  render: function(){
    return (
        <header>
          <div className="row">
            <div className="col-sm-12">
              <div className="well">
                <div className="header-box">
                  <h1 className="name"><a href="#">Majestic Thai</a></h1>
                </div>
              </div>
            </div>
          </div>
        </header>
    )
  }
});

module.exports = {
  HeaderComponent: HeaderComponent
};
