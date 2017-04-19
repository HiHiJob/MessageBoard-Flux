// stores/ListStore.js（存储）
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign'); //es6语法 类似jquery的extend扩展

var ListStore = assign({},EventEmitter.prototype,{
    items: {
        list: [],
        text: ''
    },
    
    getAll: function() { //获取items
        return this.items;
    },
    
    refreshListHandler: function(list) { //items刷新留言列表
        this.items.list = list;
    },
    
    refreshTextHandler: function(text) { //items修改通知内容
        this.items.text = text;
    },
    
    emitChange: function() { // 触发change监听，调用change绑定的函数
        this.emit('change');
    },
    
    addChangeListener: function(callback) { // chang监听绑定函数
        this.on('change',callback);
    },
    
    removeChangeListener: function(callback) { // change监听解绑
        this.removeListener('change',callback);
    }
});

module.exports = ListStore;