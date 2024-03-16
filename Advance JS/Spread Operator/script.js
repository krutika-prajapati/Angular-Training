/* 1 Converts a specified number to an array of digits. 
 	Input - 123
 	Output- [1,2,3]*/

var Input = 123;
var Output = (number) => {
  return `${[...String(number)].map(Number)}`;
};
console.log(`Output- [${Output(Input)}]`); // Output: Output- [1,2,3]

//2
var alphabets = ["A", ..."BCD", "E"];
console.log(alphabets); // Output: ["A", "B", "C", "D", "E"]

//3
var newArray = [...[, ,]]; // here Each comma represents an empty slot, not an element.spread operator spreads out these two empty slots, resulting in a new array with two undefined elements
console.log(newArray); // Output: [undefined, undefined]
//
