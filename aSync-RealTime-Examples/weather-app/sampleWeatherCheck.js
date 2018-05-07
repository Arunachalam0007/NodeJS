var request = require('request');

request({
    url: 'https://api.darksky.net/forecast/13586e40bb09820dc0faf62e2eed085b/37.8267,-122.4233',
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.log(body.currently.temperature);
    } else if (error) {
        console.log(error);
    } else {
        console.log('unable to fetch weather');
    }
});