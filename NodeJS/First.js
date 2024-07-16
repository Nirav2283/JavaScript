const a = require('./Export');
console.log(a.display("Hello"));
console.log(a.area(10));

const path = require('path');
console.log(path.join('/abc' , '/bcd'));
console.log(path.resolve('/abc' , '/bcd'));
console.log(path.relative('/abc' , '/bcd'));
console.log(path.dirname('/abc'));
console.log(path.basename('/abc'));
console.log(path.extname('/abc.ac.in'));
console.log(path.normalize('/abc'));

const fs = require('fs');
fs.exists()