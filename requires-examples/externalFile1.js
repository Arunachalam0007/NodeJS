console.log("external file launched");

module.exports.age = 20;
module.exports.teamName = 'Documentum Team';
module.exports.details=()=>{
    return "You're age is: "+this.age + "You're teamName is:" +this.teamName;
}
// var teamName = 'Documentum Team'; // undefined