var request = require('request');

var getWeather = (lat, lag, callback) => {
    request({
        url: `https://api.darksky.net/forecast/13586e40bb09820dc0faf62e2eed085b/${lat},${lag}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else if (error) {
            callback(error);
        } else {
            callback('unable to fetch weather');
        }
    });
};

module.exports = {
    getWeather
}