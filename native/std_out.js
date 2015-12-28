var fs = require('fs');

var buffer = new Buffer('Some text here and there.', 'utf-8');

console.log(buffer);

// some kind of a bitwise conversion from buffer to utf-8 bite-code
[].slice.call(buffer).forEach(function (oct) {
    process.stdout.write('00000000' + oct.toString(2).slice(-8));
});

