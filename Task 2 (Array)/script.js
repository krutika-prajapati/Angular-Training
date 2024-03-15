// Task 2A
var input = [1, 2, 3, 4, 5, 6];

var output = input.map((number) => {
  return number * 2;
});
document.write(`Expected Output=[${output}]<br>`);

// Task 2B
var input = [0, 23, 0, 0, 0, 4, 6, 0, 8, 10, 0, 0, 0, 12];

var non_zero_number = input.filter((number) => number !== 0);
var zero_number = input.filter((number) => number == 0);

var output = non_zero_number.concat(zero_number);
document.write(`Expected Output=[${output}]`);
