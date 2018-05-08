//mongo client is used to connect the mongoserver
const MongoClient = require('mongodb').MongoClient;

//mongclient to connect the db 
MongoClient.connect('mongodb://localhost:27017/TodoAPP', (err, client) => {
    if (err) {
        console.log('unable to connect the mongoDB server');
    }
    console.log('connected to mongoDB server');

    //getting the db from client db
    var db = client.db('TodoAPP');

    db.collection('Users').insertOne({
        name: 'RAINA',
        age: 22,
        location: 'chennai',
        _id: 1
    }, (err, result) => {
        if (err) {
            console.log('unable to insert the Users ' + err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
}); //it takes two arguments 1st is url like amazonwebserver url or localhost or heroku and 2nd is callback