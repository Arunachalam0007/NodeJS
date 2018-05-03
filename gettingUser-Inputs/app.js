// user can give the input value on runtime using command line argument
// i.e app.js userinput1 userinput2 ....

//getting userinput value
console.log(process.argv);

//getting third party model of yargs
var yargs = require('yargs');
var note = require('./note.js');

var arg = yargs.argv;
console.log(arg);// this will print { _: [ 'test', 'testing:1', 'testing', 'ABCD' ],}

//getting first element of the argument

var arg1=arg._[0];
console.log("first element of the input is: "+arg1);// test

if(arg1=="test"){
    note.added(arg.testing1,arg.testing2);
}
