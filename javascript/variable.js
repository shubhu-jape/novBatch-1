//  syntax: let/var/const variable_name : value;
//reserved_keywords variable_name : data type
 let b; //declaration
 console.log(b);
 b = 30;  //defination

let a = 20; //d+d
//let a ='poonam'  //redeclaration with let keyword is not possible
let favFruit = 'mango' ;

console.log(favFruit);

// let x = 40;

// x = 40;// ----- // hoisting of variable  is not possible with let keyword.
// let x;
 //console.log(x);// ----not possible
var t; //declaration
t = 50; //defination
var favCar = 'miniCup'; //D+D //redeclaration of variable is possible with var keyword 
console.log(favCar);
var favCar = 'swift';
console.log(favCar);

mobNo = 989999999; // define : hoisting of variable: first define variable's value then declare variable
var mobNo ;  //declare  //  hoisting  possible with var keyword.
console.log(mobNo);

const myName = 'poonam'; //value reassign with const keywors is not possible
//myName = 5000;
console.log(myName);
//const myName = 'patil' //redeclaration of variable is not possible with const keyword
// const g = 50;
//g = 50; //hoisting of variable is not possible with const keyword
//const g;

//function:
//function syntax: function(res keyword) functionName(){}

function myFirstFunction(){
  //code block
    console.log('i am inside function');
}

myFirstFunction();
console.log(myFirstFunction());

function scope(){
    var myFavMovie = '3idiots';
    console.log(myFavMovie);
    if(true){
        console.log(myFavMovie);
    }

}
// console.log(myFavMovie);
// program to print the text
// variable a cannot be used here
function greet() {
    let a = 'hello';

    // variable b cannot be used here
    if(true){
        // variable b can be used here
        let b = 'world';
        console.log( b);
    }

     // variable b cannot be used here
    console.log(b) ; // error
}
// variable a cannot be used here

greet();