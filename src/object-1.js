'use strict';

require('babel/polyfill');

//var date = new Date();
var o = {
    //['today_' + date.getTime()]: date.getDay(),
    toString(){
        return 'hello';
    }
};

console.log(o.toString().normalize());