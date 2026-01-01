// Let's learn about function and object in TypeScript
// Function with typed parameters and return type
function addition(a, b) {
    return a + b;
}
var sum = addition(10, 20);
console.log("Sum is:", sum);
// Arrow function is a shorter syntax for writing functions
var multi = function (x, y) {
    return x * y;
};
var multiresult = multi(5, 10);
console.log("Multiplication result is:", multiresult);
// optional parameters in function
// optional paramter is denoted by ? mark 
// optional parameter must be placed after required parameter 
function display(name, grade) {
    if (grade) {
        return "Name: " + name + ", Grade: " + grade;
    }
    return "Name: " + name + ", Grade not provided";
}
console.log(display("Alice", "testing optional parameter"));
console.log(display("Bob"));
// Default Parameters - Value automatically assigned if no value is provided
function countryinfo(country, capital) {
    if (capital === void 0) { capital = "unknown"; }
    return "Country: " + country + ", Capital: :" + capital;
}
console.log(countryinfo("USA", "Washington D.C."));
console.log(countryinfo("Narnia"));
// void function - does not return any value
function logmessage(msg) {
    console.log("Log message:", msg);
}
console.log(logmessage("This is a void function"));
// Typing Object 
var student = {
    name: "John",
    age: 21,
    isStudent: true
};
console.log("Student Info:", student);
// Optional prperty in object type
var employee = {
    id: 101,
    name: "Jane Doe"
};
console.log("Employee Info:", employee);
// readonly property in object type - prevent modification
var car = {
    vin: "1HGCM82633A123456",
    model: "Honda Accord"
};
console.log("Car Info:", car);
// Function with object parameter 
function printUser(user) {
    console.log("User Name:", user.name);
    console.log("User Email:", user.email);
}
