const { MongoClient, ObjectID } = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoAPP', (err, client) => {
    if (err) {
        console.log('unable to connect the mongoDB server');
    }
    console.log('connected to mongoDB server');

    var db = client.db('TodoAPP');

    //deleteMany it will delete all the doc based on id 2
    db.collection('DeleteCollection').deleteMany({ id: 2 }).then((res) => {
        console.log(res);
    });

    //deleteOne it will find any and delete only one
    db.collection('DeleteCollection').deleteOne({ id: 2 }).then((res) => {
        console.log(res);
    });

    //findOneAndDelete it will delete the 1st matched one and delete that item
    db.collection('DeleteCollection').findOneAndDelete({ id: 2 }).then((res) => {
        console.log(res);
    });

    client.close();
}); 