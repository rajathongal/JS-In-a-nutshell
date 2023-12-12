const someDataPoints = require("./some.json");

// JavaScript is a single threaded programming language, Ryan Dahl,
// Datatypes, conditions, loops, functions, and classes.
// JavaScript is a prototype based language, not class based.
// Javascript  can be used inside HTML elements, or in a separate file.
// JavaScript can also be used in Frontend and also backend 
// ECMA Script is the standard for JavaScript. 
// Java they have copyright of the name Java, ECMA Script it also a standard 
// Mozilla is a browser that uses spidermonkey 
// Chrome is a browser that uses chrome V8 Engine this is the most powerful version of JS
// V8 is used in chromium browsers and used in backend 
// it is not a OOPs object oriented programming language
// it doesnt support threads or multi threaded coding 
// You can still mimic OOPs and multi threaded behaviour 

// int, char, string, boolean, int 42, long, long long int, double, BigNumber etc etc
// varibale declaration doesnt need datatype to be specified 
// example
let someNumber = 42;
// semi colon is not necessary in JS ;

// Variables and Declarations
// 1) Primitive Data Types
// Three major ways to define a varibale in JS i.e. let, var, const
// let is mutable and is used in global scope 
// var is similar to let but is used in a functional scope 
// const is similar to let and var but data is immutable and can be used in both global and functional scope; but it is not recommended to use and global varibale 
// console.log(typeof(someNumber));
// redclare let and var 
someNumber = 'E';
// console.log(typeof(someNumber));
someNumber = 0.3434232323
// console.log(typeof(someNumber));

// JS has considered char datatype as string and float datatype as number 
// JS doesn;t have deep type specification while usage instead what JS does is 
// It automatically classifies the dataType during runtime

// 2) Reference Data Types
// Arrays, Objects, Functions, Dates, etc etc
let array = [];
let array2 = [2, '34', 0.33, '4', "dsfsdfd", 'r'];
let array3 = [
    {key: "value"},
    {key: "value"},
    {key: "value", carsColors: ['red', 'green', 'yellow']}
];

const Persona = {
    name: "John",
    age: 32,
    cars: ["Ford", "BMW", "Fiat"]
}

// array and object methods
// two very important notations - (.) (period/dot), [] (square brackets)

array.push(42);
array.push(43);
array.push(...array2);  // spread operator 

// console.log(array)

// console.log(array[4]);

// Accessing Objects 
// console.log(Persona.cars[1])

// how to access array of objects
// console.log(array3[2].carsColors[1]);

// Functions
// types 
// arrow functions 
// unnamed functions
// normal function declarations

// normal
function Person(name, age, some) {
    // console.log(`MY name is ${name}, age is ${age}, some is ${some}`);
} // fn Declaration

// to use the function - function call
Person("Rajath","24","some" );

function Pers({
    name,
    age,
    some
}, someVar) {
    // console.log(`MY name is ${name}, age is ${age}, some is ${some}, somevar is ${someVar}`);
};

Pers({
    name: "Rajath",
    some: "some"
}, null, "sgdfgdf");


// Arrow function 
const Person2 = (name, age, some) => {
    // console.log(`MY name is ${name}, age is ${age}, some is ${some}`);
};

Person2("Rajath","24","some" );

// arrow function manipulation

let Person3 = (name, age, some) => {
    // console.log(`MY name is ${name}, age is ${age}, some is ${some}`);
};

Person3("Rajath","24","some" );

Person3 = () => {
    // console.log("Hello")
}

Person3("Rajath","24","some" );

// Unnamed function 
((params) => {
    // console.log(params)
})("Params");

// inbuilt datatypes JS one is Date
const someDate = new Date("09/12/1999").getMonth();
// console.log(someDate)

// JSON Data format
// OOPs in JS to do later 


// JSON is a data format / structure 
// JavaScript Object Notation JSON
// hex string format to retrive this XML format you have to do something called as serialization.
// 0xfgfgsflvk93r89345ergbdafbviasffiuwrhfiurhgerkSFSDSD hex
// <book>
//   <title>Harry Potter and the Sorcerer's Stone</title>
//   <author>J.K. Rowling</author>
//   <year>1997</year>
// </book>
// Cryptographic Hash Generation into a HS256 algo convert it to hex / Hash 
// JSON is created from the heavely used JS object notation

// JSON is an Object datatype representd by {key: value} pair
const someRandomObject = {
    name: "name",
    age: 100,
    getDetails: () => { return `${someRandomObject.name} ${someRandomObject.age}`}
};

// console.log(someRandomObject.getDetails());

// someDataPoints.arrayTypeJSON.forEach((value, key) => {
//     console.log(Object.entries(value))
// });

// for(const [key, value] of Object.entries(someDataPoints.arrayTypeJSON[0])) {
//     console.log(key, value)
// }

// for(const key in someDataPoints.arrayTypeJSON) {
//     console.log(key)
// }

// console.log(typeof(someDataPoints.arrayTypeJSON), Array.isArray(someDataPoints.objectTypeJSON))

// console.log(Object.values(someDataPoints.objectTypeJSON))

// console.log(someDataPoints.arrayTypeJSON.map((value) => {
//     return value;
// }))

// classes

class Khalas {
    #macha; // protected 
    _name; // public variable 

    // var let and const also # and _ to create private varibales
    constructor(name) {
        this.name = name; // pu\blic
        this.#macha = name; // private
        this._name = name; // public
    }

    greet() {
        console.log("Khals bacche niklo")
    }

    getNamesOfJesus() {
        console.log(`${this.#macha}, ${this._name},`);
    }

    getMachaAltered() {
        this.#macha = "Gopi"
        console.log(this.#macha)
    }

    // setMacha(name) {
    //     this.#macha = name;
    //     console.log(this.#macha)
    // } // dont do this or simply dont implement setter function for private variables

};

const khalasCopy = new Khalas("Helo from Moshi");
const khalasCopyForGeroge = new Khalas("Gender Change");

// khalasCopy.greet();
khalasCopy.getNamesOfJesus();

khalasCopy._name = "Baba Blacksheep";

khalasCopy.getNamesOfJesus();
khalasCopy.getMachaAltered();
// khalasCopy.setMacha("Pyati Ravi");

// public, private vars, how to declare functions 
// class , setter function, getter functions

// How to use classes

khalasCopyForGeroge.getNamesOfJesus();

// API 
// i will create class that gets data from an url provided by a user and returns the data
// I will two instances of same class
// in 1st instance i will provide the URL to get images; 5user are simultaneously 
// in 2nd instance i will provide the URL to get videos; 200 users using this 


// package managers
// react and node project formats 
// map and sets advanced datatypes
// Design patterns factory DP, Getter setter DP
// Promises while do while loops and api calls conditions