const yargs = require('yargs');
const fs = require('fs');
const notesfile = require('./notes.js');
var argv = yargs.argv;
if (argv._[0] == 'add') {
    notesfile.add(argv.title, argv.body);
} 
