var Transform = require('stream').Transform,
    tr = new Transform();

tr._transform = function (chunk, encoding, callback) {
    var str = String(chunk);
    this.push(str + '(' + str.length + ') ');
    callback();
};

process.stdin
    .pipe(tr)
    .pipe(process.stdout);
