// LOOPS
// For Loops

// 1. Sentry
// 2. Where that sentry starts
// 3. Where that sentry stops
// 4. How that sentry changes

// Print from 0 to 10
for(var i = 0; i <= 10; i++){
  console.log(i);
}

// Print from 1 - 19 odd numbers
for(var i = 1; i <= 20; i += 2){
  console.log(i);
}

// Print from 2 - 20 even numbers with modulo
for(var i = 1; i <= 20; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

// Modulus/modulo
// Remainder of division operator

// Useful to check if a value is even or odd and also for multiples.

// 5 % 3 = 2
// 10 % 5 = 0
// 9 % 2 = 1
// 6 % 2 = 0

for(var i = 1; i <= 100; i++){
  if(i % 2 == 0) {
    console.log(i + " I'm even!")
  } else {
    console.log(i + " I'm odd")
  }
}

// Try Fizzbuzz in your spare time!!

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.

// Create a variable called sum and assign the value zero to it.
// Create a for loop
// Starts at zero
// Ends at 255
// Increment by one
// Inside the for loop 
//   Add i to sum
//   Print i and sum

