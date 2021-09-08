// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

// [1, 3, 5, 7, 2]

// Break this down into smaller, more manageable components.
// Try just odds first for example, then try the evens.
// Try different arrays.
// Make sure four of either odds or evens in a row only outputs the message once.
// We will need variables.

/*

Create a function called evensAndOdds that accepts an array as input.
Create a variable called oddsCount and assign the value 0 to it.
Create a variable called evensCount and assign the value 0 to it.
Create a for loop that starts at 0, ends at the end of the array, and increments by 1.
Inside the for loop:
  Create a conditional that checks if the current value is odd
  Inside the conditional:
    If the current value is odd, add 1 to oddsCount
    Reset evensCount to 0 - the evens streak (if there was one) is broken.
    Create a nested conditional that checks if oddsCount is 3
    Inside the nested conditional:
      If oddsCount is 3, print "That's odd!"
      Reset oddsCount to 0 - we start over
  Create an else - not an else if. There's only one other case. If the integer is not odd, it must be even.
  Inside the else:
    Add 1 to evensCount
    Reset oddsCount to 0 - the odds streak (if there was one) is broken.
    Create a nested conditional that checks if evensCount is 3
    Inside the nested conditional:
      If evensCount is 3, print "Even more so!"
      Reset evensCount to 0 - we start over
*/

function evensAndOdds(arr) {
  var oddsCount = 0;
  var evensCount = 0;
  for (var i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0) {
      oddsCount++;
      evensCount = 0;
      if(oddsCount == 3) {
        console.log('That\'s odd!');
        oddsCount = 0;
      }
    } else {
      evensCount++;
      oddsCount = 0;
      if(evensCount == 3) {
        console.log('Even more so!');
        evensCount = 0;
      }
    }
  }
}

var arr1 = [1, 3, 5, 7, 2] // That's odd!
var arr2 = [2, 4, 6, 8, 2] // Even more so!
var arr3 = [1, 3, 5, 7, 2, 4, 6, 7, 2, 100, 56, 33, 55, 77, 99, 2121, 20, 22, 24, 8] // That's odd!, Even more so!, Even more so!, That's odd!, Even more so!

console.log('arr1: ');
evensAndOdds(arr1);
console.log('arr2: ');
evensAndOdds(arr2);
console.log('arr3: ');
evensAndOdds(arr3);