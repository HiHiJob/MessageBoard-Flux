// dispatcher/AppDispatcher.js（分发器）
var ListStore = require('../stores/ListStore');
var AppDispatcher = require('./Dispatcher');

AppDispatcher.register(function(action){
    switch(action.actionType){ //通过不同的actionType更新不同数据
        case 'REFRESH_LIST': // 更新留言列表
            ListStore.refreshListHandler(action.list);
            ListStore.emitChange();
            break;
        case 'REFRESH_TEXT': // 更新通知内容
            ListStore.refreshTextHandler(action.text);
            ListStore.emitChange();
            break;
        default:
            // noDefault;
    }
})

module.exports = AppDispatcher;