var express = require('express');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

var app = express();

app.get('',(req,res)=>{
    exec('start "" "e://"')
})

app.listen(3000);


//references : https://medium.com/stackfame/how-to-run-shell-script-file-or-command-using-nodejs-b9f2455cb6b7
