// normal function

var square=function(x){
    return x*x
}

// Arrow1

var squareArrow1=(x)=>{

    return x*x
}
console.log(squareArrow1(10));

// Arrow 2

var squareArrow1= x => x*x;
console.log(squareArrow1(10));


// When we can't use Arrow function:

// !. this keyword in arrow function will not work
// !!. arguments keyword in arrow function will no work using object function

// E.g:


var arrowCheck={
    name:'arun',
    age:'20',
    details:()=>{
        console.log(this.name);// undefined
        console.log(arguments);// we are not getting expected arguments
    }
}
var regularCheck={
    name:'arun',
    age:'20',
    details (){
        console.log(this.name);// arun
        console.log(arguments);//1 2 3
    }
}

arrowCheck.details(1,2,3);
regularCheck.details(1,2,3);

