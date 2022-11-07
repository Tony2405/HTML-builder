"use strict"

const fs = require("fs");

const path = require("path");
const path_to_file = path.join(__dirname, "text.txt");

const readline = require("readline");

const process = require('process');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const writeFile = fs.createWriteStream(path_to_file, {encoding:"utf-8"}, "text.txt");

rl.on('SIGINT', ()=>{
    console.log("You pressed Ctrl+C, good bye!");
    rl.close();
});

const write = function(){

    rl.question("Type anything: ", type_text =>{
        console.log(type_text);
        if(type_text.toLocaleLowerCase()==="exit"){
            console.log("Good bye! You are going to exit");
            rl.close();
            return;
        }
    writeFile.write(type_text + "\n", (err) => err?console.log(err.mesage):write());
    })
};
write();
