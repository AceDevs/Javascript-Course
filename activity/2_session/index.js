// Ejercicio 1
const objectProperties = obj => Object.keys(obj);

var person = {
  firstName: "Eduardo",
  lastName: "Aguirre",
  age: 10,
  profession: "Developer",
  country: "Mexico",
  fullName: function(){
    console.log(this);
    return `${this.firstName} ${this.lastName}`
  }
}
var person2 = {
  firstName: "Test",
  lastName: "Aguirre",
  age: 10,
  profession: "Developer",
  country: "Mexico",
  fullName: function(){
    console.log(this);
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(objectProperties(person));

// Ejercicio 2
// It has different values depending on where it is used:

// 1. In a method, this refers to the owner object.
console.log(person.fullName());

// 1. Alone, this refers to the global object.
console.log(this);

// In a function, this refers to the global object.
//So, this refers to the Global object Window.
const testFunc = function (){
  console.log(this);
}
testFunc();

// In a function, in strict mode, this is undefined.
const strictFunction = function (){
  'use strict';
  console.log(this);
}
strictFunction();

// In an event, this refers to the element that received the event.
let title = document.getElementById('ejercicio-2');
title.onclick = function (){
  console.log(this);
}

// Methods like call(), and apply() can refer this to any object.
person.fullName.call(person2);

// Ejercicio 3
const invertirCadena = (t) => t.split("").reverse().join('');
console.log(invertirCadena("Hola mundo"));

// Ejercicio 4
class Login{
  constructor(username, password) {
    this.username = username;
    this.password = password;
    if(username == "admin" && password == "passwd"){
      alert('User logged in!');
    }
    else{
        alert('User or password incorrect!');
      }
  }
}

// Ejercicio 5
let successBtn = document.getElementById('loginSuccess');
let failureBtn = document.getElementById('loginFailure');

successBtn.onclick = () => new Login('admin', 'passwd');
failureBtn.onclick = () => new Login('admin', 'bad');

// Ejercicio 6
let successAsyncBtn = document.getElementById('loginSuccessAsync');
let failureAsyncBtn = document.getElementById('loginFailureAsync');

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};

successAsyncBtn.onclick = async () => {
  try{
    let res = await loginWitUsername('admin', 'passwd');
    console.log(res);
  }
  catch(e) { console.log(e); }
};

failureAsyncBtn.onclick = async () => {
  try{
    let res = await loginWitUsername('admin', 'pass');
    console.log(res);
  }
  catch(e) { console.log(e); }
};