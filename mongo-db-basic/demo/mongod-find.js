//mongo client is used to connect the mongoserver
//destructure type of ES6
const { MongoClient, ObjectID } = require('mongodb');
var obj = new ObjectID();
console.log(obj);

//mongclient to connect the db 
MongoClient.connect('mongodb://localhost:27017/TodoAPP', (err, client) => {
    if (err) {
        console.log('unable to connect the mongoDB server');
    }
    console.log('connected to mongoDB server');

    //getting the db from client db
    var db = client.db('TodoAPP');

    //find all using to array

    // db.collection('Find').find().toArray().then((res) => {
    //     console.log("FIND Collection loaded");
    //     console.log(JSON.stringify(res, undefined, 2));
    // }, (err) => {
    //     console.log('unabe to fetch Find Collections', err);
    // });

    // find based on id using toArray

    db.collection('Find').find({ _id: 7 }).toArray().then((res) => {
        console.log("FIND Collection loaded");
        console.log(JSON.stringify(res, undefined, 2));
    }, (err) => {
        console.log('unabe to fetch Find Collections', err);
    });

    db.collection('Find').find().count().then((res) => {
        console.log(`Find Collection count is: ${res}`);
    }, (err) => {
        console.log("unable to fetch find collections", err);
    });

    client.close();
}); //it takes two arguments 1st is url like amazonwebserver url or localhost or heroku and 2nd is callback