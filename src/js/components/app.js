var React       = require('react'),
    Catalog     = require('./app-catalog'),
    Cart        = require('./app-cart');

var App = React.createClass({
	render : function(){
		return (
            <div>
                <h1>Shopping</h1>
                <Catalog />
                <h1>Cart</h1>
                <Cart />
            </div>
        );
	}
});

module.exports = App;