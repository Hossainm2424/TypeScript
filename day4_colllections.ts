// Let's learn about collections in TypeScript

// Array - collection of similar types 
// number array
let num:number[] = [10,20,30,40,50];
console.log("Number Array:", num);

// string array 
let fruits: string[]= ["Apple", "Banana", "Orange"];
console.log("Fruits Array:", fruits);

// generic Array type
let ids: Array<number> = [101, 102, 103];
console.log("IDs Array:", ids);


// Array with Union tupes 
let values : (number | string)[] = [10, "Twenty", 30, "Forty", "Fifty"];
console.log("Values Array with Union Types:", values);

// Readonly Array - cannot be modified after creation
let roles : readonly string[]= ["Admin", "User", "Guest"];
console.log("Readonly Roles Array:", roles);



// Tuple - fixed number of elements with specific types
let users : [number, string, boolean]=[1,"test User Name" ,true];
console.log("User Tuple:", users);

// Tuple with optional elements 
let product: [number, string, boolean?]= [101, "Laptop"];
console.log(product)



// Enum - are used to define a set of named constants
enum Status {
    active = "ACTIVE",
    inactive = "INACTIVE",
    pending = "PENDING"
}
let userStatus: Status = Status.active;
console.log("User Status:", userStatus);


// Enum in functions 
function checkStatus (status:Status): string {
    if(status === Status.active){
        return "User is Active";
    }
    return "Unknown Status";
}
console.log(checkStatus(Status.active));


// Union Type - variable can hold multiple types
let id : number | string | boolean;
id = 1001;
id = "A1001";
id = true;

console.log("Union Type ID:", id);



// Practice Example 
 let grade : number[] =[90, 85, 88, 92, 95];
 console.log("Grades Array:", grade);
 grade.forEach(grade=>{
    console.log("Grade:", grade);
 })


 type Employee = [number, string, string?];
 let emp = [1, "John" , "A"]
 console.log("Employee Tuple:", emp);




