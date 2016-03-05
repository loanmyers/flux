var React = require('react');
var Catalog = require('app-catalog');

var App = React.createClass({
	render : function(){
		return (
        <div>
            <h1>Shopping</h1>
            <Catalog />
        </div>
        );
	}
});

module.exports = App;