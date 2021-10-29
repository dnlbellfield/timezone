// grab the file system api with ESModule or commonJS
// let fs = require('fs');
import fs from 'fs';

// writeFile vs writeFileSync
fs.writeFileSync('out.txt', "This should be written to file")