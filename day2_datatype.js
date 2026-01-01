// string 
var message = "I am string data type in TypeScript";
console.log(message);
// number 
var price = 99.99;
console.log("I am number data type", price);
// Boolean 
var isDeveloper = true;
console.log("I am boolean data type", isDeveloper);
// TypeScript can Automatically infer Types 
var count = 10;
console.log("I am inferred type number", count);
// Any type - disable type checking 
var randomValue = 10;
// Unknown type is safer than any type 
var num;
num = 10;
// null and undefined 
var n = null;
var u = undefined;
console.log("null value", n);
console.log("undefined value", u);
// void - function that does not return a value
function greet(msg) {
    console.log("Greeting message:", msg);
}
// Never - Function that never end
function error(message) {
    throw new Error(message);
}
