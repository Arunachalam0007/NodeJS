const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    // this request method requires two arguments 
    // request({},callback)F

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {

        //console.log(JSON.stringify(body, undefined, 2)); //it send the response body of json data into string type

        // finding the location of langutute and latutude
        if (error) {
            callback("unable to connect the server");
        }
        if (body.status == 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
        else {
            callback(body.status);
        }
    })
};

module.exports = {
    geocodeAddress
}

//13586e40bb09820dc0faf62e2eed085b