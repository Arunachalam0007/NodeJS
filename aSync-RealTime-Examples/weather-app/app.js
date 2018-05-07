//3rd party modules
// var request = require('request');
var yargs = require('yargs');

//external modues
var geocode = require('./geocode');
var argv = yargs.option({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch the weather info',
        string: true
    }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
    }
});
