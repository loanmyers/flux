var React = require('react');
var AppActions = require('../actions/app-actions');

var App = React.createClass({
	handler: function(){
        AppActions.addItem('this is axx item');
	},
	render:function(){
		return <h1 onClick={this.handler}>My second attempt flux App</h1>
	}
});

module.exports = App;