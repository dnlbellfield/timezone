// grab the file system api with ESModule or commonJS
// let fs = require('fs');
import fs from 'fs';

// writeFile vs writeFileSync
// sync
// fs.writeFileSync('out.txt', "This should be written to file")

// async (file, data[options], callback)
fs.writeFile('out.txt', "This should be written to file", err => {
console.log("This is printed after the file is written.")})
console.log("This should print after the previous line.")