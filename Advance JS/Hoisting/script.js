// 1.List down techniques with examples where hoisting does not work as expected in JS.

// ***********Hoisting doesn't work with let and const**********

//console.log(x);//error:Missing initializer in const declaration
//const x;

//console.log(y); //error: Cannot access 'y' before initialization
//let y;

//**********Arrow Function & Function Expression can not hoisted*******

//f1(); //error:Cannot access 'f1' before initialization
// const f1 = () => {
//   console.log("calling from f1");
// };

// f2(); //error:Cannot access 'f2' before initialization
// const f2 = function () {
//   console.log("calling from f2");
// };

// var a = 4;
// function greet() {
//   b = "hello";
//   console.log(b);
//   var b;
// }
// greet();
// console.log(b);

// 2. Output of above code

//hello
//Uncaught ReferenceError: b is not defined

//The variable b is hoisted within the scope of the greet function so "hello" is logged in console, but outside the function b is not defined, hence ReferenceError is occured.
