const { MongoClient, ObjectID } = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoAPP', (err, client) => {
    if (err) {
        console.log('unable to connect the mongoDB server');
    }
    console.log('connected to mongoDB server');

    var db = client.db('TodoAPP');

    //findOneAndUpdate it will update the 1st matched one and delete that item
    db.collection('UpdateCollection').findOneAndUpdate({
        _id: 1
    }, {
            $set: {
                name: 'Updated'
            }
        }, {
            returnOriginal: false // it will return the updated document
        }).then((res) => {
            console.log(res);
        });

    client.close();
}); 