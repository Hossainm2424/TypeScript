// string 
let message : string = "I am string data type in TypeScript";
console.log(message);

// number 
let price : number =99.99; 
console.log("I am number data type",price);

// Boolean 
let isDeveloper: boolean = true; 
console.log("I am boolean data type",isDeveloper);


// TypeScript can Automatically infer Types 
let count =10; 
console.log("I am inferred type number",count);

// Any type - disable type checking 
let randomValue: any = 10;

// Unknown type is safer than any type 
let num :unknown;
num = 10;


// null and undefined 
let n :null= null; 
let u :undefined = undefined;
console.log("null value",n);
console.log("undefined value",u);

// void - function that does not return a value
function greet(msg:string):void{
    console.log("Greeting message:",msg);
}


// Never - Function that never end
function error(message:string):never{
    throw new Error(message);
}

