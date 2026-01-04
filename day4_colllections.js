// Let's learn about collections in TypeScript
// Array - collection of similar types 
// number array
var num = [10, 20, 30, 40, 50];
console.log("Number Array:", num);
// string array 
var fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits Array:", fruits);
// generic Array type
var ids = [101, 102, 103];
console.log("IDs Array:", ids);
// Array with Union tupes 
var values = [10, "Twenty", 30, "Forty", "Fifty"];
console.log("Values Array with Union Types:", values);
// Readonly Array - cannot be modified after creation
var roles = ["Admin", "User", "Guest"];
console.log("Readonly Roles Array:", roles);
// Tuple - fixed number of elements with specific types
var users = [1, "test User Name", true];
console.log("User Tuple:", users);
// Tuple with optional elements 
var product = [101, "Laptop"];
console.log(product);
// Enum - are used to define a set of named constants
var Status;
(function (Status) {
    Status["active"] = "ACTIVE";
    Status["inactive"] = "INACTIVE";
    Status["pending"] = "PENDING";
})(Status || (Status = {}));
var userStatus = Status.active;
console.log("User Status:", userStatus);
// Enum in functions 
function checkStatus(status) {
    if (status === Status.active) {
        return "User is Active";
    }
    return "Unknown Status";
}
console.log(checkStatus(Status.active));
// Union Type - variable can hold multiple types
var id;
id = 1001;
id = "A1001";
id = true;
console.log("Union Type ID:", id);
// Practice Example 
var grade = [90, 85, 88, 92, 95];
console.log("Grades Array:", grade);
grade.forEach(function (grade) {
    console.log("Grade:", grade);
});
var emp = [1, "John", "A"];
console.log("Employee Tuple:", emp);
