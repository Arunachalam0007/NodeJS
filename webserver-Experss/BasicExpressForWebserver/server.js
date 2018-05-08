const express = require('express');

//makking new express app and there is no argument to pass to the express
var app = express();

//we can sent the json or html data
//we can register a handler using app.get => this is setup handler for  https

//1st argument is root of the app and second is request and response
app.get('/', (req, res) => {
    //res.send is used to send the response to the server
    res.send("Hello This is my 1st response");
});
app.get('/HOME', (req, res) => {
    //res.send is used to send the response to the server
    res.send("Hello This is my HOME PAGE");
});

app.get('/JSON', (req, res) => {
    //res.send is used to send the response to the server
    res.send({
        response: "This is JSON Response",
        page: 'JSON PAGE'
    });
});

// this listen build our application port on machine
app.listen(8080);