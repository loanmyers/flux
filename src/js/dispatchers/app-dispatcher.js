var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Dispatcher(), {
	handleViewAction: funtion(action){
		this.dispatch({
			source: 'VIEW_ITEM',
			action: action
		})
	}
});

module.exports = AppDispatcher;