// const arrValue = ["one", "two", "three", "four"];
// const [...x,y] = arrValue;
// console.log(x); //Output: Rest element must be last element

// const arrValue = ["one", ["two", "three"]];
// const [x, [y, z]] = arrValue;
// console.log(x); //one
// console.log([y, z]); //['two', 'three']
// console.log(z); //three

// let arrValue = [10];
// let [x = 5, y = 7] = arrValue;
// console.log(x); //10
// console.log(y); //7
//Destructuring assignment extracts the first element of arrValue and assigns it to x. Since there is no second element in arrValue, y= 7.

//const [a, b, ...[length]] = [1, 2, 3];
//console.log(a, b, length); //1,2,3
//a= 1,b=2,[length] extract the first element from the rest of the array, which is [3]. So, length is assigned the value 3.

// const [a, b, ...{ length }] = [1, 2, 3];
// console.log(a, b, length); //1,2,1
//length incidate the length of the remaining array that is only [3] so the output is 1
