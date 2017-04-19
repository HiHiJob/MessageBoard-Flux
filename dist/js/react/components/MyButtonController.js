// components/MyButtonController.jsx
var React = require('react');
var ButtonActions = require('../actions/ButtonActions');

var MyButtonController = React.createClass({
  createNewItem: function (event) {
    ButtonActions.addNewItem('new item');
  },

  render: function() {
    return <MyButton
      onClick={this.createNewItem}
    />;
  }
});

module.exports = MyButtonController;