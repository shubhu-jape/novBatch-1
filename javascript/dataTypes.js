let myName = 'poonam';

//let myNameList = [] //empty array
let myNameList = ['poonam','Raj','Shiv', 'Priya', 'Preet' , 500 , 20, 30, test()] ;

function test(){

var result = 'poonam';
    return result;
}
console.log('myNameList', myNameList); //array
console.log(myNameList[1]); //Raj
console.log(myNameList[8]);
console.log(myNameList[10]);  //undefined
console.log(myNameList.length); // 9

//let student = {} //empty obj
let student = {
    name : 'Pooja',
    age : 20,
    class : 12,
    failStatus : false
}
console.log(student);
console.log(student.class);

let employees = [
{
    name: 'Pooja',
    age: 30,
},
 {
    name: 'Raj',
    age: 40
 },
{
    name: ' Vishal',
    age: 40
 }
]
console.log(employees);
console.log(employees[1].name);

let list = [
    ['pp','oo'],
    ['ppp','ooo',['ppppp','oooooo']],
    ['pppp','ooo']
];
console.log(list);
console.log(list[0][1]);
console.log(list[1][2][0]);

var obj = {
    "posts": [
      {
        "id": 1,
        "title": "json-server",
        "author": "typicode"
      }
    ],
    "comments": [
      {
        "id": 1,
        "body": "some comment",
        "postId": 1
      }
    ],
    "profile": {
      "name": "typicode"
    },
    "status": "succsess"
  }
  console.log(obj.posts[0].author)

  //data types in js
// string
// number
// boolean
// object
// null
// undefined
  var car = '-null i am poonam'; //'true' , -9.0 ,90,-0
    console.log(typeof(car));
    console.log(typeof(20+40+'poonam'+20));

    