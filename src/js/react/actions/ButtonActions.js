// actions/ButtonActions.js（动作）
var AppDispatcher = require('../dispatcher/AppDispatcher');

var ButtonActions = {
  refreshList: function (list) { // 更新留言列表
    AppDispatcher.dispatch({
      actionType: 'REFRESH_LIST',
      list: list
    });
  },
  refreshText: function (text) { // 更新通知内容
    AppDispatcher.dispatch({
      actionType: 'REFRESH_TEXT',
      text: text
    });
  },
};

module.exports = ButtonActions;