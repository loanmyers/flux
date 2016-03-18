var React           = require("react"),
    Appstore        = require("../stores/app-stores"),
    IncreaseItem    = require("app-increase"),
    DecreaseItem    = require("app-decrease"),
    RemoveFromCart  = require("app-removefromcart");


function cartItems(){
    return {items: Appstore.getCart()}
}

var Cart  = React.createClass({
    getInitialState : function(){
        return getCart();
    },
    componentWillMount : function() {
        Appstore.addChangeListener(this.onChange())
    },
    _onChange : function() {
        this.setState(cartItems());
    },
    render : function(){

    }
});
