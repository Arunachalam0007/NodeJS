console.log("This is requires example program");

// added build in files 
const fs = require('fs');
const os = require('os');

// added external files
const exFile=require('./externalFile1');

var user = os.userInfo();
fs.appendFile('TextFile.txt', `hello ${user.username}!`+" You're age is: " +exFile.age+" You're teamName is: "+exFile.teamName);