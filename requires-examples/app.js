console.log("This is requires example program");

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
fs.appendFile('TextFile.txt', `hello ${user.username}!`);