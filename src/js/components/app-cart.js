var React           = require("react"),
    Appstore        = require("../stores/app-stores"),
    IncreaseItem    = require("./app-increaseitem"),
    DecreaseItem    = require("./app-decreaseitem"),
    RemoveFromCart  = require("./app-removefromcart");


function cartItems(){
    return {items: Appstore.getCart()}
}

var Cart  = React.createClass({
    getInitialState : function(){
        return cartItems();
    },
    componentWillMount : function() {
        Appstore.addChangeListener(this._onChange)
    },
    _onChange : function() {
        this.setState(cartItems());
    },
    render : function(){
        var total = 0;
        var items = this.state.items.map(function(item, i){
            var subtotal = item.cost * item.qty;
            total += subtotal;
            return(
                <tr key={i}>
                    <td><RemoveFromCart index={i} /></td>
                    <td>{item.title}</td>
                    <td>{item.qty}</td>
                    <td>
                        <IncreaseItem index={i} />
                        <DecreaseItem index={i} />
                    </td>
                    <td>{subtotal}</td>
                </tr>
            );
        })
        return (
            <table className="table table-hover boostrapisntlinkedhere">
                <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th></th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>{total}</td>
                    </tr>
                </tfoot>
            </table>
        )
    }
});

module.exports = Cart;