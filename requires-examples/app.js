console.log("This is requires example program");

// added build in files 
const fs = require('fs');
const os = require('os');

// added external files
const exFile=require('./externalFile1');

// added third party models 

const _=require('lodash'); //npm install lodash --save

var user = os.userInfo();
fs.appendFile('TextFile.txt', `hello ${user.username}!`+" You're age is: " +exFile.age+" You're teamName is: "+exFile.teamName+"\n");
fs.appendFile('TextFile.txt',exFile.details());

//lodash methods 
console.log(_.isString(true)); //false
console.log(_.isString("Arunsha")); //true

var filteredArray = _.uniq(['Arun',101,102,101,'sha','Arun']);
console.log(filteredArray);  //[ 'Arun', 101, 102, 'sha' ]