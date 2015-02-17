'use strict';

require('babel/polyfill');

// String templete example
var numPrizes = 100;
var player = 'Roberto';

var winnerMessage = `${player} won ${numPrizes} prizes!`;

console.log(winnerMessage);

// Let's try out the new methods: includes, startsWith and endsWith
console.log(
    'winnerMessage.includes(player)',
    winnerMessage.includes(player)
);

console.log(
    'winnerMessage.startsWith(\'Rob\')',
    winnerMessage.startsWith('Rob')
);

console.log(
    'winnerMessage.endsWith(\'prizes\')',
    winnerMessage.endsWith('prizes')
);

// Here it's like we have done the substring cutting the string at position 22
// and then we are asking if that string ends with an 's'
// winnerMessage.substring(0, 22).endsWith('s')
console.log(
    'winnerMessage.endsWith(\'s\', 22)',
    winnerMessage.endsWith('s', 22),
    '| winnerMessage.substring(0, 22).endsWith(\'s\')',
    winnerMessage.substring(0, 22).endsWith('s')
);

console.log(
    'winnerMessage.endsWith(\'prizes!\')',
    winnerMessage.endsWith('prizes!')
);