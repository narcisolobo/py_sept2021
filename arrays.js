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

// 5. Find and Print Max
// printMaxOfArray(arr)
// Given an array, find and print its largest element. 

// PSEUDOCODE
// Create a function named printMaxOfArray that has one parameter (arr)
// Create a variable called max and assign the first element in the array to be its value
// Create a for loop that starts at the second element, and stops at the last element - arr.length and increments by one
// Create a conditional that tests whether max is less than the current value in the array
// If max IS less than the current value in the array, make that the new max
// After the for loop, print the final value of max

function printMaxOfArray(arr){
  var max = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(max < arr[i]){
      max = arr[i];
    }
  }
  console.log(max);
}

printMaxOfArray([3, 6, 1, 8, 23, 32, 5, 10]);

// 13. Swap String For Array Negative Values
// swapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.

// Create a function called swapStringForArrayNegativeVals that takes in an array (arr) as input
// Create a for loop that starts at zero, ends at the array.length, and increments by one
// Inside the for loop, create a conditional that tests whether arr[i] is less than zero
// If it is, overwrite the current element with the string "Dojo"
// After the for loop, console.log the array

function swapStringForArrayNegativeVals(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = "Dojo";
    }
  }
  console.log(arr);
}

var myArray = [3, -6, 1, 8, -23, 32, -5, 10];
swapStringForArrayNegativeVals(myArray);