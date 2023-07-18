//Program 1: setTimeout method
//A)
function work(){
    console.log("cloudeq");
}
setTimeout(work,5000);

//B)
var a=setTimeout(hi,3000);
function hi(){
    console.log("hello world")
}

//Program 2: setInterval method
//A)
function work(){
    console.log("work() will be printed every 1 millisecond.");
}
setInterval(work,1000)

//B)
var a=setInterval(hi,3000);
function hi(){
    console.log("hello world will be printed every 3 millisecond.")
}
