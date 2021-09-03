// Arrays
// What are they even?

// Primitive datatypes - strings, numbers, booleans, undefined, null

// Reference datatypes - arrays, objects

var color1 = "red";
var color2 = "blue";
var color3 = "green";

// Array literal notation
var colors = [
  "red",
  "blue",
  "green"
];

// Any datatype may be placed in an array.
// Mix and match any datatypes in an array.

var seeso = ["Narciso", "Lobo", true, 23];

var faveStuff = [];
faveStuff[0] = 'ukulele';
// console.log(faveStuff);

// Getting and setting
// Bracket notation

// Get one value
console.log(faveStuff[0]);

// Set one value
faveStuff[2] = "comic book movies"; // we say 'faveStuff sub 2'

// Get entire array
console.log(faveStuff)

console.log(faveStuff[1]); // dangerous to skip indexes

// Set entire array
faveStuff = [1, 2, 3, 4];

// Array properties and methods
// These are 'baked in' or 'built in' to JavaScript

// The length property
console.log(faveStuff.length);

// Methods
// Push method
// start with the name of the array
// followed by a dot
// followed by the name of the method
// followed by parentheses
// in parentheses place what you wanna push
// Push always places the element at the end of the array
faveStuff.push(5);

console.log(typeof faveStuff);
console.log(Array.isArray(faveStuff));
console.log("after push: " + faveStuff);

// Pop method
// Pop takes no arguments - that means the parentheses are empty
// Pop 'pops' the last element off of an array
// It also returns that element
faveStuff.pop();
console.log("after pop", faveStuff);

var element = faveStuff.pop();
console.log("element: ", element);
console.log(faveStuff);

// BUT WAIT THERE'S MORE
// Let's sort

var unsortedArray = [10, 4, 2, 7, 4, 8, 9, 24];
var sortedArray = unsortedArray.sort();
console.log("sorted array: ", sortedArray);

// Loop through an array

var colors = ['green', 'red', 'purple', 'blue'];
// How would I print each element one at a time?

for(var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

// 4. Iterate and Print Array
// Iterate through a given array, printing each value. 
// printArrayVals(arr)

function printArrayVals(arr){
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

printArrayVals(colors);