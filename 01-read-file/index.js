"use strickt"

const fs = require("fs");

const path = require("path");

const path_to_file = path.join(__dirname, 'text.txt');

const readStream = new fs.createReadStream(path_to_file);

readStream.pipe(process.stdout);