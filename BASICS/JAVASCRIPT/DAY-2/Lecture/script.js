//Hoisting
//temporal dead zone for let and const
//closures for let and const bcz of block scope
//event loop
//constructor function
//de-structuring
//prototyping (used like extension method)
//prototype chaining

console.log(car);
var car = "bmw";

//error
// console.log(car2);
// let car2 = "bmw";

//error
// console.log(car3);
// const car3 = "bmw";

getCar();
//function declaration
function getCar(){ 
    console.log("bmw");
}

// error
// car();
var car = function Car() {
    console.log("bmw");
}

for (var index = 0; index < 5; index++) {
    setTimeout(()=>{
        console.log(index);
    },1000);    
}

for (let index = 0; index < 5; index++) {
    setTimeout(()=>{
        console.log(index);
    },1000);    
}


//error bcz class does not support hoisting
// const car4 = new Cars('bmw');
// console.log(car4.name);

class Cars {
    constructor(name){
        this.name = name;
    }
}

const car5 = new Cars('bmw');
console.log(car5.name);


//constructor function
function Cars2(carName){
    this.carName = carName;
}

const car6 = new Cars2("bmw");
console.log(car6.carName);

const Person = {
    name : "shubh",
    age : 22,
    comapny : "Bacancy",
    techStack : "Angular, .net",
    emp : {
        empId : 11
    }
}

console.log(Person);
console.log(Person.name);
console.log(Person.age);
console.log(Person['comapny']);
console.log(Person["techStack"]);

const {name:firstName,age,address="kalash appts"} = Person; 
console.log(firstName);
console.log(age);
console.log(address);

const {techStack, emp:{empId}} = Person;
console.log(techStack);
console.log(empId);

const nums = [1,2,3,4,5];

let [a,b] = nums;
console.log(a);
console.log(b);

const [,,,,c] = nums;
console.log(c);

//swap  in single line
[a,b] = [b,a]
console.log(a);
console.log(b);

const [first,second, ...rest] = nums;
console.log(first,second,rest);

class Person2 {
    constructor(){
    }

    greet(){
        console.log("hello Person");
    }
}
const student = new Person2();
student.greet();

//In chrome console
//Person2.prototype
//student.__proto__
//student.__proto__ === Person2.prototype   returns true bcz internally it does student.__proto__ = Person2.prototype for each object

//Adding extenstion method to class Person2 or predefined class
Person2.prototype.customMethod = function(){
    console.log("custom method");
}

//Professor.__proto__ = Person2.prototype internally bcz of inheritance
class Professor extends Person2{
    constructor() {
    }

    subject(){
        console.log("angular");
    }
}

