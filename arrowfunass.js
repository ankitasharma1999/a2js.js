//Question 1: what are the functions of an arrow function.
/*An arrow function is a shorter and more concise syntax for defining functions in JavaScript.
Arrow functions are anonymous functions i.e. they are functions without a name and are not bound by an identifier. 
Arrow functions do not return any value and can be declared without the function keyword. They are also called Lambda Functions.*/

console.log("a)Arrow Function with No Argument: ");
//If a function doesn't take any argument, then we should use empty parentheses.
var company=()=>console.log("cloudeq");
company();

console.log("b)Arrow Function with one Argument: ");
//If a function has only one argument, we can omit the parentheses.
var company=x=>console.log(x);
company("apple");

console.log("c)Arrow Function as an Expression: ");
//We can also dynamically create a function and use it as an expression
var age=5;
var hi=(age<18)?()=>console.log("child"):()=>console.log("adult");
hi();

console.log("d)Multiline Arrow Functions: ");
//If a function body has multiple statements, we need to put them inside curly brackets {}.
var add=(x,y)=>{ var ans1=x+y; return ans1};
var ans2=add(2,4);
console.log(ans2);

/*Question 2: What is Promise.
Promises in JavaScript allow us to handle asynchronous tasks (tasks that take time) in a more organized and convenient way,
making our code easier to read and understand. They help prevent our program from freezing while waiting for long-running tasks to finish.*/
console.log("Promise program");
var count = true;
var cValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});
console.log(cValue);

/*Question 3: Generator Function
Generator functions  allow us to pause and resume function  execution, which can be handy when dealing with big chunks 
of data or performing tasks in a step-by-step manner. */
console.log("Generator Function");
function* gf(){
    yield 100;
    yield 200;
}
var fun=gf();
console.log(fun.next().value);
console.log(fun.next().value);

/* Question 4: First Class Function
A programming language is said to have First-class functions if functions in that language are treated like other variables.
 So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.*/

 console.log("a)Assigning to variable")
 var a=function()
 {
    console.log("hello world");
 }
 a();

 console.log("b)Passed as argument to functions");
  function Hi() {
    console.log("Hi.....");
  }
  function Fn(funArgument) {
    funArgument();
  }
  Fn(Hi); 

 