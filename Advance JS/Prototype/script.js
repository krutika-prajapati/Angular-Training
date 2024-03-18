//custom method for Array
Array.prototype.findmin = function () {
  let min = this[0];
  for (let i = 0; i < this.length; i++) {
    if (this[i] < min) {
      min = this[i];
    }
  }
  return min;
};

let numbers = [23, 67, 45, 11, 5];
let minnumber = numbers.findmin();
console.log(`Minimum number is = ${minnumber}`);
//Output:
//Minimum number is = 5

//custom method for Object

Object.prototype.countproperties = function () {
  let count = 0;
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
};

let myObject = {
  name: "Krutika",
  city: "Ahmedabad",
  company: "Bacancy",
};

console.log(myObject.countproperties()); //Output:3
