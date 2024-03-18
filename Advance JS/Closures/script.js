//1. Write a factorial program of given range: 0 - 10 using closure.
function factorialRange(start, end) {
  let memo = {};

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }

    if (memo[n]) {
      return memo[n];
    } else {
      memo[n] = n * factorial(n - 1);
      return memo[n];
    }
  }

  let factorials = [];
  for (let i = start; i <= end; i++) {
    factorials.push(factorial(i));
  }

  return factorials;
}

const result = factorialRange(0, 10);
result.forEach((value, index) => {
  console.log(`Factorial of ${index} is : ${value}`);
});

//Output:
/*
Factorial of 0 is : 1
Factorial of 1 is : 1
Factorial of 2 is : 2
Factorial of 3 is : 6
Factorial of 4 is : 24
Factorial of 5 is : 120
Factorial of 6 is : 720
Factorial of 7 is : 5040
Factorial of 8 is : 40320
Factorial of 9 is : 362880
Factorial of 10 is : 3628800*/

//********************************************************************************************** */
// 2

function calculate(x) {
  function multiply(y) {
    return x * y;
  }
  return multiply;
}
const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3);
console.log(multiply3());
console.log(multiply3(6));
console.log(multiply4(2));

// Output of above code is:

// ƒ multiply(y) {      ==> here multiply3 return the inner multiply function returned by the calculate function wich has argyment 3
//     return x * y;
//   }

// NaN   ==> when we call multiply2() without passing argument then value of y is undefined fo the output is undefined*3 that produce NAN

// 18    ==> when we call multiply3(6), x(which is 3) multiplued by y(which is 6) so the output is 18

// 8     ==> when we call multiply4(2), x(which is 4) multiplied by y(which is 2) so the output is 8

//*********************************************************************************************************** */
//3
function outset() {
  var c = 12;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outset()("Hi Closures");
close();

//Output of above code:
//10 'Hi Closures' 12 ==> The output 10 'Hi Closures' 12 occurs because the inner function accesses 'a' from its inner scope (set to 10), b from the argument passed to outer (set to "Hi Closures"), and c from the outer outset function's scope (set to 12).

//******************************************************************************************************** */
//4
function setCount() {
  let number = 0;
  return function () {
    console.log(number++);
    console.log(++number);
  };
}
const counter = setCount();
counter();
counter();
counter();

// Output of above code
// 0   ==>console.log(number++) prints the current value of number (which is 0), then increments it by 1 that become 2
// 2   ==>console.log(++number) increments the value of number by 1 first (which becomes 2) and then prints
// 2   ==>console.log(number++) prints the current value of number (which is 2), then increments it by 1 that become 3
// 4   ==>console.log(++number) increments the value of number by 1 first (which becomes 4) and then prints
// 4   ==>console.log(number++) prints the current value of number (which is 4), then increments it by 1 that become 5
// 6   ==>console.log(++number) increments the value of number by 1 first (which becomes 6) and then prints
