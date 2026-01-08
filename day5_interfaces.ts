// Let's learn interfaces in TypeScript
const user:{
    name:string;
    age:number;
} ={
    name: "Alice",
    age: 30
}

console.log("User:", user);


// Interface declaration
interface Person{
    id: number;
    name: string;
    email?: string; 
}

const p1: Person ={
    id: 1,
    name: "Bob"
}
console.log("Person 1:", p1);


// Interface with functions 
interface addFn{
    (a:number, b:number): number;
}
const add: addFn = (x,y) => x +y;
console.log("Addition:", add(5, 10));


interface Employee extends Person{
    role:string;     
}

const employee : Employee ={
    id:2, 
    name: "Charlie",
    role: "Developer"

}

console.log("Employee:", employee);

// Type Alias - similar to interfaces 
type Product ={
    id:number;
    name:string;
    price:number;
}
const laptop : Product={
    id:101, 
    name: "Laptop",
    price: 999.99 
}
console.log("Product:", laptop);


// Tasks 1
interface Student {
    id: number;
    name: string;
    grade: string;
}

// Task 2
let OrderStatus :"pending" | "shipped" | "delivered";

// Task 3
interface User{
    id: number;
    username: string;
}
interface adminuser extends User{
    adminRole: string;
    
}
