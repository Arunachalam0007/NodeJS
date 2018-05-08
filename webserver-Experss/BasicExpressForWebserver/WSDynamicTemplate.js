const express = require('express');

//makking new express app and there is no argument to pass to the express
var app = express();

app.use(express.static(__dirname));


//hbs is used to access the dynmaic template for file

var hbs = require('hbs');

//set will assign the value based on value
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    //res.send is used to send the response to the server
    // res.send("Hello This is my 1st response");
    res.render('html1.hbs', {
        line1: ' This dynamic content of template1',
        line2: 'This dynamic content of template2'
    });
});
app.get('/HOME', (req, res) => {
    //res.send is used to send the response to the server
    res.send("Hello This is my HOME PAGE");

    // res.render('file1.txt'); this is also anotherway for sending the response...
});

app.get('/JSON', (req, res) => {
    //res.send is used to send the response to the server
    res.send({
        response: "This is JSON Response",
        page: 'JSON PAGE'
    });
});

// this listen build our application port on machine
app.listen(8080, () => {
    console.log("Application is load on 8080 port number");
});