var React = require('react');
var AppActions = require('../actions/app-actions');

var AddToCart = React.createClass({
    handler : function(){
        AppActions.increaseItem(this.props.item)
    },
    render : function(){
        return <button onClick={this.handler}>Add to cart</button>
    }
});

module.exports = AddToCart;