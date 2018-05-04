
var fs = require('fs');

var addNotes = function (title, body) {
    var notes = [];
    var note = {
        title,
        body
    };

    //try catch for reading the empty file 
    try {
        var notesString = fs.readFileSync('json1.json');
        notes = JSON.parse(notesString);

    } catch (e) {

    }

    //Fininding the  duplicate node i.e iterate an nodes array based on title condition

    var duplicatedNodes = notes.filter((element) => (element.title === title && element.body === body));

    if (duplicatedNodes.length === 0) {
        notes.push(note);
        fs.writeFileSync('json1.json', JSON.stringify(notes));
    }
}


module.exports = {
    add: addNotes
};