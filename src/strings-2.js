'use strict';

require('babel/polyfill');

// Let's see the string repeat method. This method may come in handy in some
// cases, most of all I think to the constructs that we may imagine and build
// using and twicking it...
// In this case we are trying to tell Gran Ma that Willie went to buy the milk
// as she wants to know that
//
var question = 'Who went to buy the milk?';
var answer = 'Willie! ';
var whos = 0;

// Gran ma can't hear so well... so
console.log(question, answer.repeat(++whos));
// Gran ma asks again
console.log(question, answer.repeat(++whos));
// and again
console.log(question, answer.repeat(++whos));