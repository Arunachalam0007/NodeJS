//3rd party modules
var yargs = require('yargs');

//external modues
var geocode = require('./geocode');
var weathercheck = require('./weathercheck');
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
        console.log(result.address);
        weathercheck.getWeather(result.latitude, result.longitude, (errorMessage, weatherCheckResult) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherCheckResult, undefined, 2));
            }
        });
    }
});
