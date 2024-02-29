

//two type data type
//primitive
//non-primitive

// # Primitive

// 7 Types: String, Number,Boolean,null,undefined,symbol,BigInt

//Javascript dynamic or static
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id===anotherId);

const bigNumber=343432432325325325245245435n

//their types can change during the execution of the program

// Reference Type (Non primitive)

// Array, Objects,Functions

const heros =["shaktiman","naagraj","doga"]
let myObj={
    name:"samim",
    age:23,
}

const myFunction=function(){
    console.log("Hello Word");
}

// console.log(typeof myObj);

// ####################### Memory ##############

// Stack (Primitive -> copy of value declear variable) ,Heap(Non- Primitive=> original value reference)

let myYouTubeName="samimanvar"

let anothername=myYouTubeName
anothername="chaiandcode"
console.log(myYouTubeName);
console.log(anothername);

let userOne ={
    email:"user@google.com",
    upi:"user1"
}

let userTwo=userOne

userTwo.email="samim@google.com"
console.log(userOne.email);
console.log(userTwo.email);