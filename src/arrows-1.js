'use strict';

require('babel/polyfill');

// Implicit return statement, just like a lambda function
var add = (a) => (b) => a + b;

// The following implements multiplication on the basis of addition, in
// particular using a functional style of partial application.
var multiply = (a) => (b) => {
    var result = 0,
        adder = add(b); // partial application of addition

    // We show here that the fat-arrow function wraps the function body in
    // braces, so that we can return an explicit value from that.
    //
    // We are also using new ES6 Array methods: Array.from and Array.keys
    // Notice that Array.keys returns an Interator. In this case we actually
    // want an array, and that's where the Array.from comes in, to create
    // an array from the iterable object.

    //Array.from(Array(a).keys()).map(() => {
    for (let i of Array(a).keys()){
        result = adder(result);
    }

    return result;
}
/*
console.log(
    (function myFn(){
        var arr = [];
        for (let i of Array.apply(0, Array(26)).map((x, y) => y))
            arr[i] = String.fromCharCode(65 + i);
        return arr;
    }())
);*/

console.log(add(1)(2));

var times = multiply(3);

console.log(times(5));
console.log(times(7));