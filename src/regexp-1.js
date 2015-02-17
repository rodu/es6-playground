'use strict';

require('babel/polyfill');

// A unicode character: 𠮷
// In this example we look at the newly added 'u' flag in regular expressions,
// which allow to correctly handle Unicode characters in UTF-16. In fact this
// is the new default character set, which is of course backward compatible and
// offers advantages in encoding a much higher (potentially never reachable)
// number of characters.
// JavaScript edition 5, will not be able to handle this regular expression test
console.log(
    (/^.$/).test('𠮷')
);

// Notice that:
console.log('𠮷'.length); // returns 2
// That's because to encode that character with Utf-8 we actually need to use
// two memory positions, therefore the length of 2 characters and not 1.
// This of course in ES6 will return the correct length of 1.

// In JavaScript edition 6 we have the 'u' flag, which will allow us to
// correctly handle these cases using the same regular expression patterns
console.log(
    (/^.$/u).test('𠮷')
);

// It would be helpful to note what code the transpiler has generated for
// handling the u flag...
