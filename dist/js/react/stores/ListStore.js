// stores/ListStore.js���洢��
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign'); //es6�﷨ ����jquery��extend��չ

var ListStore = assign({},EventEmitter.prototype,{
    items: {
        list: [],
        text: ''
    },
    
    getAll: function() { //��ȡitems
        return this.items;
    },
    
    refreshListHandler: function(list) { //itemsˢ�������б�
        this.items.list = list;
    },
    
    refreshTextHandler: function(text) { //items�޸�֪ͨ����
        this.items.text = text;
    },
    
    emitChange: function() { // ����change����������change�󶨵ĺ���
        this.emit('change');
    },
    
    addChangeListener: function(callback) { // chang�����󶨺���
        this.on('change',callback);
    },
    
    removeChangeListener: function(callback) { // change�������
        this.removeListener('change',callback);
    }
});

module.exports = ListStore;