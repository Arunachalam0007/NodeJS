//3rd party modules
var yargs = require('yargs');

//Axios
var axios = require('axios'); //THis will make XHR request and return promises object

var argv = yargs.option({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch the weather info',
        string: true
    }
}).help().alias('help', 'h').argv;

var encodedAddress = encodeURIComponent(argv.address);
var geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geoCodeURL).then((response) => {
    if (response.data.status == "ZERO RESULT") {
        throw new Error('unable to find the address');
    }
    var results = response.data.results[0];
    var address = results.formatted_address;
    var latitude = results.geometry.location.lat;
    var longitude = results.geometry.location.lng;
    var weatherURl = `https://api.darksky.net/forecast/13586e40bb09820dc0faf62e2eed085b/${latitude},${longitude}`;
    console.log("test: " + address);
    return axios.get(weatherURl);
}).then((response) => {
    var temperature = ((response.data.currently.temperature)-32)*0.5556;
    var apparentTemperature =((response.data.currently.adp)-32)*0.5556;
    console.log(`It's currently ${temperature}. But It feels like ${apparentTemperature}`)
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log("Unable to connect the server");
    } else {
        console.log(e.message);
    }
});


