//singleton
Object.create  // create object contructore method through (it's single ton object method)

//object literals // key as a default knon as "String type"
const mySym = Symbol("key1")
const JsUser = {
  name: "Samim",
  age: 20,
  [mySym]: "mykey1",
  locaion: "Allahabad",
  email: "samim@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);

// console.log(typeof JsUser[mySym]);
JsUser.email = "samim@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "samim@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Heloo Js User");
}

JsUser.greetingTwo = function () {
  console.log(`Heloo Js User ${this.name}`);
}
console.log(JsUser.greeting()
);
console.log(JsUser.greetingTwo());