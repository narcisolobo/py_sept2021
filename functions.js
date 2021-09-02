// We want to calculate how much we need to pay on a bill with a tip
// We need the bill
// We need the percentage of the tip
// We need a result (sum) of the bill + the tip
​
// var bill = 20;
// var tipPercent = 0.1;
// var sum = bill + (bill * tipPercent);
// console.log(sum);
​
// var bill2 = 14.85;
// var tipPercent2 = .18;
// var sum2 = bill2 + (bill2 * tipPercent2);
// console.log(sum2);
​
// var bill3 = 19.15;
// var tipPercent3 = .25;
// var sum3 = bill3 + (bill3 * tipPercent3);
// console.log(sum3);
​
// A function -> a set of instructions just waiting to be triggered - a chunk/block of code that when triggered performs a set of instructions
​
// Parameter -> a variable we pass in to a function
​
function calculateTip(bill, tipPercent) {
    // This is where the set of instructions lives
    var sum = bill + (bill * tipPercent);
    console.log("$" + sum.toFixed(2));
    // console.log("Yep, you got a bill");
    // return sum.toFixed(2);
}
​
var mybill = 50
​
var theBill = calculateTip(20, .1);
// console.log(theBill/4);
// var bill2 = calculateTip(14.85, .18);
// console.log(bill2);
// calculateTip(19.15, .25);
​
// I want a function that takes in a name and logs a greeting
​
// Challenge: How can we use for loops and functions together?
​
// Challenge: Let's add a conditional where if there is no value for times do a console log that says "Hey, you didn't add a parameter!"
​
function greeting(name, times) {
    if(!isNaN(times)){
        console.log("Entering the for loop!")
        // This will trigger if times IS a number
        // for loop elements -> starting point, ending point, iterator
        for(var i = 0; i < times; i++){
            console.log("Hi there " + name + "!");
        }
        // return "Hello"
    } else {
        console.log("Please enter a number for times!");
    } 
    // return "Hello" 
    console.log("My return:")
    return "You have reached the end of your code!";
    // console.log("I ran the function!");
}
// greeting("Matthew", 2);
// greeting("Marlyn", 3);
​
// Return statement
​
function myConsoleLog(){
    console.log("This is a console.log statement")
}
​
function myReturn(){
    return "This is a return statement"
}
​
// console.log(myConsoleLog());
// console.log(myReturn());
​
var num = 16;
function myExample(num) {
    num+=10;
    console.log(num);
    return num;
}
// var result = myExample(12);
// result = result/2
// console.log(result);
// result = result/3
// console.log(result);
// myExample(12);
// console.log(myExample(num))
// console.log(num);
​
function count(){
    for(var i = 1; i < 10; i++){
        if(i == 5){
            return "five"
        }
        console.log(i);
    }
}
console.log(count());